import s from './ModerationPanel.module.scss'
import { Button } from "@/shared/components/Button/Button";
import { useEffect, useState } from "react"
import { type RejectionReason } from "@/shared/types/rejectionReason.types";
import {approveAdvertisement, rejectAdvertisement, requestChangesAdvertisement } from "@/entities/Advertisement";
import { useMutation } from "@tanstack/react-query";
import { ApproveAdvertisementButton, ModerationAdvertisementsReasonsForm, RejectAdvertisementButton, RequestChangesAdverisementButton } from "@/features/ModerationAdvertisement";

export const ModerationPanel = ({ adId }: { adId: number }) => {
    const [isViewForm, setIsViewForm] = useState<boolean>(false);
    const [actionType, setActionType] = useState<'reject' | 'request-changes' | ''>('')
    const [selectedReason, setSelectedReason] = useState<RejectionReason | null>(null);
    const [comment, setComment] = useState<string | ''>('');

    const { isPending: isApproving, isSuccess: isApproved, data: aprrovingData, mutate: approve } = useMutation({
        mutationKey: ['ads', adId],
        mutationFn: approveAdvertisement
    })
    const { isPending: isRejecting, isSuccess: isRejected, data: rejectingData, mutate: reject } = useMutation({
        mutationKey: ['ads', adId],
        mutationFn: rejectAdvertisement
    })
    const { isPending: isRequestingChanges, isSuccess: isRequestedChanges, data: requestingChangesData, mutate: requestChanges } = useMutation({
        mutationKey: ['ads', adId],
        mutationFn: requestChangesAdvertisement
    })

    const isPending = isApproving || isRejecting || isRequestingChanges;

    const handleApprove = () => {
        setIsViewForm(false)
        setComment('')
        approve(adId)
    }
    const handleReject = () => {
        const payload = {
            reason: selectedReason as RejectionReason,
            comment,
        }
        reject({ adId: Number(adId), payload })
    }
    const handleRequestChanges = () => {
        const payload = {
            reason: selectedReason as RejectionReason,
            comment,
        }
        requestChanges({ adId: Number(adId), payload })
    }

    const switchActionType = (type: 'reject' | 'request-changes') => {
        setIsViewForm(true);
        setComment('');
        setActionType(type);
    }

    useEffect(() => {
        if(isPending) {
            setIsViewForm(false)
        }
    }, [isPending])

    return (
        <div>
            <div className={s.actions}>
                <ApproveAdvertisementButton disabled={isPending} handleApprove={handleApprove}/>
                <RejectAdvertisementButton disabled={isPending} onClick={() => switchActionType('reject')}/>
                <RequestChangesAdverisementButton disabled={isPending} onClick={() => switchActionType('request-changes')}/>
            </div>

            {isViewForm && 
                <ModerationAdvertisementsReasonsForm 
                actionSlot={<Button onClick={actionType === 'request-changes' ? handleRequestChanges : handleReject} sx={{ backgroundColor: 'var(--c-red)', color: 'white', fontFamily: 'var(--font-family)', marginTop: '10px' }}>Отправить</Button>}
                selectedReason={selectedReason} 
                onSelectReason={setSelectedReason} 
                onChangeComment={(e) => setComment(e.target.value)}/>
            }
               
            {isApproved && aprrovingData && <p>{aprrovingData.message} !</p>}
            {isRejected && rejectingData && <p>{rejectingData.message} !</p>}
            {isRequestedChanges && requestingChangesData && <p>{requestingChangesData.message} !</p>}
        </div>
    )
}

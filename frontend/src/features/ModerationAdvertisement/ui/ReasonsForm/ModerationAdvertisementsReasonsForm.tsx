import { REJECTION_REASONS_LIST } from '@/shared/consts/rejectionReasonsList'
import { FormControlLabel, Input, Radio } from '@mui/material'
import { type ChangeEvent, type ReactNode } from 'react'
import s from './ModerationAdvertisementsReasonsForm.module.scss'
import { REJECTION_REASONS, type RejectionReason } from '@/shared/types/rejectionReason.types'

interface ModerationAdvertisementsReasonsFormProps {
    actionSlot: ReactNode,
    onSelectReason: (reason: RejectionReason) => void,
    selectedReason: RejectionReason | null,
    onChangeComment: (e: ChangeEvent<HTMLInputElement>) => void,
}

export const ModerationAdvertisementsReasonsForm = (props: ModerationAdvertisementsReasonsFormProps) => {
    const { actionSlot, onSelectReason, selectedReason, onChangeComment } = props;

    return (
        <form className={s.form}>
                <label>Причины:</label>
                <div className={s.list}>
                    {REJECTION_REASONS_LIST.map((reason) => (
                        <FormControlLabel
                        key={reason}
                        label={reason}
                        control={
                            <Radio 
                            sx={{ color: 'grey' }} 
                            name='reason' 
                            checked={selectedReason === reason}
                            onClick={() => onSelectReason(reason)}
                            />
                        }
                        />
                    ))}
                    {
                    selectedReason === REJECTION_REASONS.OTHER &&
                        <FormControlLabel
                            label='Опишите причину'
                            control={
                                <Input
                                sx={{ color: 'grey' }} 
                                onChange={onChangeComment}
                                />
                            }
                        />
                    }
                </div>
                {actionSlot}
            </form>
    )
}

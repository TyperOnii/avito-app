import type { RejectionReason } from "@/shared/types/rejectionReason.types"; 

export interface RejectAdvertisementPayload {
    reason: RejectionReason,
    comment?: string,
}

export interface RequestChangesAdvertisementPayload {
    reason: RejectionReason,
    comment?: string,
}
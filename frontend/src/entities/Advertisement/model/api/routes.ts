import type { RejectionReason } from "../../../../shared/types/rejectionReason.types"
import type { Status } from "../../../../shared/types/status.types"
import type { Advertisement } from "../types/advertisement.types"

const SLUG = '/ads'

export const ADVERTISEMENT_API_ROUTES = {
    ADVERTISEMENTS: `${SLUG}/`,
    ADVERTISEMENT_BY_ID: (adId: number) => `${SLUG}/${adId}/`,
    ADVERTISEMENT_APPROVE: (adId: number) => `${SLUG}/${adId}/approve/`,
    ADVERTISEMENT_REJECT: (adId: number) => `${SLUG}/${adId}/reject/`,
    ADVERTISEMENT_REQUEST_CHANGES: (adId: number) => `${SLUG}/${adId}/reject/`
} as const

export interface AdvertisementsQueryParams {
    page?: number,
    limit?: number,
    status?: Status | Status[],
    categoryId?: number,
    minPrice?: number,
    maxPrice?: number,
    search?: string,
    sortBy?: 'createdAt' | 'price' | 'priority',
    sortOrder?: 'asc' | 'desc',
}

export interface RejectAdvertisementPayload {
    reason: RejectionReason,
    comment?: string,
}

export interface RequestChangesAdvertisementPayload {
    reason: RejectionReason,
    comment?: string,
}

export interface AdvertisementResponse {
    message: string,
    ad: Advertisement,
}
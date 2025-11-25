import { API_ROOT } from "@/shared/config/api"
import { ADVERTISEMENT_API_ROUTES } from "./routes"
import type { Advertisement } from "../types/advertisement.types"
import type { PaginationObject } from "@/shared/types/pagination.types"
import type { RejectionReason } from "@/shared/types/rejectionReason.types"
import type { AdvertisementResponse } from "./response.types"

export const getAdvertisements = async (params?: URLSearchParams) => {
    try {
        const response = await fetch(`${API_ROOT}${ADVERTISEMENT_API_ROUTES.ADVERTISEMENTS}?limit=10${params ? `&${params?.toString()}` : ''}`, {
        method: 'GET',
        })
        const data = await response.json()
        return data as { ads: Advertisement[], pagination: PaginationObject }

    } catch(error) {
        console.error(error)
    }
}

export const getAdvertisementById = async (adId: number) => {
    try {
        const response = await fetch(`${API_ROOT}${ADVERTISEMENT_API_ROUTES.ADVERTISEMENT_BY_ID(adId)}`, {
        method: 'GET',
        })
        const data = await response.json()
        return data as Advertisement

    } catch(error) {
        console.error(error)
    }
}

export const rejectAdvertisement = async ({ payload, adId }: { payload: { reason: RejectionReason, comment?: string }, adId: number }) => {
    try {
        const response = await fetch(`${API_ROOT}${ADVERTISEMENT_API_ROUTES.ADVERTISEMENT_REJECT(adId)}`, 
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
        })
        const data = await response.json()
        return data as AdvertisementResponse

    } catch(error) {
        console.error(error)
    }
}

export const requestChangesAdvertisement = async ({ payload, adId }: { payload: { reason: RejectionReason, comment?: string }, adId: number }) => {
    try {
        const response = await fetch(`${API_ROOT}${ADVERTISEMENT_API_ROUTES.ADVERTISEMENT_REQUEST_CHANGES(adId)}`, 
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        })
        const data = await response.json()
        return data as AdvertisementResponse

    } catch(error) {
        console.error(error)
    }
}

export const approveAdvertisement = async (adId: number) => {
    try {
        const response = await fetch(`${API_ROOT}${ADVERTISEMENT_API_ROUTES.ADVERTISEMENT_APPROVE(adId)}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        })
        const data = await response.json()
        return data as AdvertisementResponse

    } catch(error) {
        console.error(error)
    }
}


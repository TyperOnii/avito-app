import type { Status } from "../../../../shared/types/status.types";

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
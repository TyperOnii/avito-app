import type { Period } from "@shared/types/period.types"; 

export interface StatsSummaryQueryParams {
    period?: Period,
    startDate?: string,
    endDate?: string,
}
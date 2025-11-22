import type { Period } from "../../../../shared/types/period.types";

const SLUG = '/stats';

export const STATISTIC_API_ROUTES = {
    SUMMARY: `${SLUG}/summary/`,
    CHART_ACTIVITY: `${SLUG}/chart/activity/`,
    CHART_DECISIONS: `${SLUG}/chart/decisions/`,
    CHART_CATEGORIES: `${SLUG}/chart/categories/`,
} as const

export interface StatisticsSummaryParams {
    period?: Period,
    startDate?: string,
    endDate?: string,
}
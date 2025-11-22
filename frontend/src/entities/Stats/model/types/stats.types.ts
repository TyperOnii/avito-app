import type { Category } from "../../../../shared/types/categories.types";

export interface Statistics {
    summary: Summary,
    activityChart: ActivityChart[],
    decisionsChart: DecisionsChart,
    categoriesChart: CategoriesChart,
}

export interface Summary {
    totalReviewed: number,
    totalReviewedToday: number,
    totalReviewedThisWeek: number,
    totalReviewedThisMonth: number,
    approvedPercentage: number,
    rejectedPercentage: number,
    requestChangesPercentage: number,
    averageReviewTime: number,
}

export interface ActivityChart {
    date: string,
    approved: number,
    rejected: number,
    requestChanges: number,
}

export interface DecisionsChart {
    approved: number,
    rejected: number,
    requestChanges: number,
}

export type CategoriesChart = Record<Category, number>
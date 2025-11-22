const SLUG = '/stats';

export const STATS_API_ROUTES = {
    SUMMARY: `${SLUG}/summary/`,
    CHART_ACTIVITY: `${SLUG}/chart/activity/`,
    CHART_DECISIONS: `${SLUG}/chart/decisions/`,
    CHART_CATEGORIES: `${SLUG}/chart/categories/`,
} as const

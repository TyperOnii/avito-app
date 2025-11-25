import { API_ROOT } from "@/shared/config/api"
import { STATS_API_ROUTES } from "./routes"

export const getStatsSummary = async () => {
    try {
        const response = await fetch(`${API_ROOT}${STATS_API_ROUTES.SUMMARY}`, {
        method: 'GET',
        })
        const data = await response.json()
        return data

    } catch(error) {
        console.error(error)
    }
}

export const getStatsChartActivity = async () => {
    try {
        const response = await fetch(`${API_ROOT}${STATS_API_ROUTES.CHART_ACTIVITY}`, {
        method: 'GET',
        })
        const data = await response.json()
        return data

    } catch(error) {
        console.error(error)
    }
}

export const getStatsChartDecisions = async () => {
    try {
        const response = await fetch(`${API_ROOT}${STATS_API_ROUTES.CHART_DECISIONS}`, {
        method: 'GET',
        })
        const data = await response.json()
        return data

    } catch(error) {
        console.error(error)
    }
}

export const getStatsChartCategories = async () => {
    try {
        const response = await fetch(`${API_ROOT}${STATS_API_ROUTES.CHART_CATEGORIES}`, {
        method: 'GET',
        })
        const data = await response.json()
        return data

    } catch(error) {
        console.error(error)
    }
}
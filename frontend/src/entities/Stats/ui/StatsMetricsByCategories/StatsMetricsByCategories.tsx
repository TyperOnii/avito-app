import s from './StatsMetricsByCategories.module.scss'
import type { CategoriesChart } from '../../model/types/stats.types'

interface StatsMetricsByCategoriesProps {
    metrics: CategoriesChart
}

export const StatsMetricsByCategories = ({ metrics }: StatsMetricsByCategoriesProps ) => {
    return (
        <ul className={s.list}>
            {Object.entries(metrics).map(([category, value]) => (
                <li key={`${category}-${value}`} className={s.cell}>
                    <span>{category}</span>
                    <span><b>{value}</b></span>
                </li>
            ))}
        </ul>
    )
}

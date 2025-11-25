import type { Summary } from "../../model/types/stats.types"
import s from './StatsMetricsCard.module.scss'

interface StatsMetricsCardProps {
    metrics: Summary
}

export const StatsMetricsCard = (props: StatsMetricsCardProps) => {
    const { metrics } = props;

    return (
        <article className={s.card}>
            <div className={s.row}>
                <span>Одобрено</span>
                <span>{Math.round(metrics.approvedPercentage)} %</span>
            </div>
            <div className={s.row}>
                <span>Отклонено</span>
                <span>{Math.round(metrics.rejectedPercentage)} %</span>
            </div>
            <div className={s.row}>
                <span>На доработку</span>
                <span>{Math.round(metrics.requestChangesPercentage)} %</span>
            </div>
            <div className={s.row}>
                <span>За все время</span>
                <span>{metrics.totalReviewed}</span>
            </div>
            <div className={s.row}>
                <span>За месяц</span>
                <span>{metrics.totalReviewedThisMonth}</span>
            </div>
            <div className={s.row}>
                <span>За неделю</span>
                <span>{metrics.totalReviewedThisWeek}</span>
            </div>
            <div className={s.row}>
                <span>За сегодня</span>
                <span>{metrics.totalReviewedToday}</span>
            </div>
            <div className={s.row}>
                <span>Ср. время</span>
                <span>{Math.round(metrics.averageReviewTime / 60)} с</span>
            </div>
        </article>
    )
}

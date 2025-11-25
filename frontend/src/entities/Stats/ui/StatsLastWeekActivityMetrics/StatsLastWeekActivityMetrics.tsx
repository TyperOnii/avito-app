import type { ActivityChart } from '../../model/types/stats.types'
import { BarChart } from '@mui/x-charts'

interface StatsLastWeekActivityMetricsProps {
    metrics: ActivityChart[]
}

export const StatsLastWeekActivityMetrics = ({ metrics }: StatsLastWeekActivityMetricsProps) => {

    const days = metrics.map(item => {
        const date = new Date(item.date);
        return date.toLocaleDateString('ru-RU', { 
            day: '2-digit', 
            month: '2-digit' 
        });
    });

    const approvedData = metrics.map(item => item.approved);
    const rejectedData = metrics.map(item => item.rejected);
    const requestChangesData = metrics.map(item => item.requestChanges);

    return (
        <BarChart
            hideLegend
            xAxis={[
                {
                    id: 'days',
                    data: days,
                    scaleType: 'band',
                    label: 'Дни недели',
                },
            ]}
            yAxis={[
                {
                    id: 'activityCount',
                    label: 'Количество',
                },
            ]}
            series={[
                {
                    data: approvedData,
                    label: 'Одобрено',
                    color: 'var(--c-green)',
                },
                {
                    data: rejectedData,
                    label: 'Отклонено',
                    color: 'var(--c-red)',
                },
                {
                    data: requestChangesData,
                    label: 'На доработку',
                    color: 'var(--c-yellow)',
                },
            ]}
            width={600}
            height={400}
        />
    );
}

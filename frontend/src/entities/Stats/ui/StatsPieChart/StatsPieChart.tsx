import { PieChart } from '@mui/x-charts/PieChart';
import type { DecisionsChart } from '../../model/types/stats.types';
import { useTheme } from '@mui/material/styles';

interface StatsPieChartProps {
    metrics: DecisionsChart
}

export const StatsPieChart = (props: StatsPieChartProps) => {
    const theme = useTheme()
    const { metrics } = props;

    return (
        <PieChart
            hideLegend
            colors={[theme.palette.success.main]}
            series={[
                {
                    data: [
                        { id: 0, value: Math.round(metrics.approved), label: 'Одобрено', color: theme.palette.success.main, },
                        { id: 1, value: Math.round(metrics.rejected), label: 'Отклонено', color: theme.palette.success.main },
                        { id: 2, value: Math.round(metrics.requestChanges), label: 'На доработку' },
                    ],
                    paddingAngle: 1,
                }
            ]}
            width={300}
            height={200}
        />
    );
}
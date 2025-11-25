import { StatsMetricsByCategories, StatsMetricsCard, StatsPieChart } from "@/entities/Stats"
import { getStatsChartActivity, getStatsChartCategories, getStatsChartDecisions, getStatsSummary } from "@/entities/Stats/model/api/api"
import { StatsLastWeekActivityMetrics } from "@/entities/Stats/ui/StatsLastWeekActivityMetrics/StatsLastWeekActivityMetrics"
import { Container } from "@/shared/components/Container/Container"
import { useQuery } from "@tanstack/react-query"
export const StatsPage = () => {
    const { error: summaryError, data: summaryData, isLoading: isLoadingSummary } = useQuery({ queryKey: ['summary'], queryFn: getStatsSummary })
    const { error: chartActivityError, data: chartActivityData, isLoading: isLoadingActivity } = useQuery({ queryKey: ['chart-activity'], queryFn: getStatsChartActivity })
    const { error: chartCategoriesError, data: chartCategoriesData, isLoading: isLoadingCategories } = useQuery({ queryKey: ['chart-categories'], queryFn: getStatsChartCategories })
    const { error: chartDecisionsError, data: chartDecisionsData, isLoading: isLoadingDicisions } = useQuery({ queryKey: ['chart-decisions'], queryFn: getStatsChartDecisions })

    if(isLoadingSummary || isLoadingDicisions || isLoadingActivity || isLoadingCategories) {
      return 'Загружаем данные'
    }

    return (
      <Container>
        <div style={{ display: 'grid', rowGap: '20px'}}>
          <h2>Статистика</h2>
          <StatsMetricsCard metrics={summaryData}/>
          <StatsPieChart metrics={chartDecisionsData}/>
          <StatsMetricsByCategories metrics={chartCategoriesData}/>
          <p style={{ textAlign: 'center' }}>Активность за неделю</p>
          <StatsLastWeekActivityMetrics metrics={chartActivityData}/>
        </div>
      </Container>
    )
}

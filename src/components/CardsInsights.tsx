
import { Activity, Briefcase, DollarSign, Users } from 'lucide-react'
import { DashboardData } from "@/customTypes/dashboard-data"
import DashboardCard from './DashboardCard'
import { getHighestActivityLocation, getHighestEngagement, getTopProduct, getTotalRevenue } from '@/lib/chartUtils'
import { formatNumberWithCommas } from '@/lib/formaters'


export default function CardsInsights({ data }:{ data: DashboardData }) {
  
  const totalRevenue = getTotalRevenue(data.dashboardData.charts.salesOverTime)
  const topProduct = getTopProduct(data.dashboardData.tables.topProducts)
  const highestEngagement = getHighestEngagement(data.dashboardData.charts.userEngagement)
  const highestActivityLocation = getHighestActivityLocation(data.dashboardData.map.locations)

  return (
    <section className='grid grid-cols-4 gap-4'>
      <DashboardCard
        className='col-span-4 sm:col-span-2 xl:col-span-1'
        title='Total Revenue'
        value={`$ ${formatNumberWithCommas(totalRevenue.amount)}`}
        description={`Total Revenue at ${totalRevenue.years.join(', ')}`}
        icon={<DollarSign size={16} className='text-gray-600 dark:text-gray-400' />}
      />

      <DashboardCard
        className='col-span-4 sm:col-span-2 xl:col-span-1'
        title='Top Product'
        value={`$ ${formatNumberWithCommas(topProduct.sales)}`}
        description={`For Product: ${topProduct.name}`}
        icon={<Briefcase size={16} className='text-gray-600 dark:text-gray-400' />}
      />

      <DashboardCard
        className='col-span-4 sm:col-span-2 xl:col-span-1'
        title='Highest User Engagement'
        value={formatNumberWithCommas(highestEngagement.engagement)}
        description={`For Week: ${highestEngagement.week}`}
        icon={<Users size={16} className='text-gray-600 dark:text-gray-400' />}
      />

      <DashboardCard
        className='col-span-4 sm:col-span-2 xl:col-span-1'
        title='Highest Location Activity'
        value={formatNumberWithCommas(highestActivityLocation.activity)}
        description={`For Location: ${highestActivityLocation.label}`}
        icon={<Activity size={16} className='text-gray-600 dark:text-gray-400' />}
      />
    </section>
  )
}

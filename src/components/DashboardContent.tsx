'use client'

import { getDashboardData } from '@/server/actions'
import { useQuery } from '@tanstack/react-query'
import CardsInsights from '@/components/CardsInsights'
import ChartsInsights from '@/components/ChartsInsights'
import TableInsights from '@/components/TableInsights'
import MapInsights from '@/components/MapInsights'
import PlaceHolder from '@/components/shared/PlaceHolder'
import LoadingPlaceHolder from '@/components/shared/LoadingPlaceHolder'

  
export default function DashboardContent() {

    const { data, isLoading, isError, error } = useQuery({
        queryKey: ['dashboard'],
        queryFn: () => getDashboardData(),
        refetchInterval: 5000, // Refetch data every 5 seconds
    })


    if (isLoading) return <LoadingPlaceHolder />

    if (isError || !data?.success) {
        return <PlaceHolder>
            <span className='block'>Error Loading Dashboard Data!</span>
            {!data?.success && <span className='block text-sm pt-2'>{data?.message}</span>}
            <span>{error?.message}</span>
        </PlaceHolder>
    }

    if (!data.data?.dashboardData) return <PlaceHolder>No Data Available!</PlaceHolder>

    const dashboardData = data.data
    

    return (
        <main className='flex flex-col gap-6'>
            <h1 className='text-3xl sm:text-4xl font-bold'>Dashboard</h1>
            <CardsInsights data={dashboardData} />
            <ChartsInsights data={dashboardData} />
            <TableInsights data={dashboardData} />
            <MapInsights locations={dashboardData.dashboardData.map.locations} />
        </main>
    )
}

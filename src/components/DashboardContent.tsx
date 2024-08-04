'use client'

import { getDashboardData } from '@/server/actions'
import { useQuery } from '@tanstack/react-query'
import React from 'react'
import LoadingPlaceHolder from './LoadingPlaceHolder'
import PlaceHolder from './PlaceHolder'

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

    const { dashboardData } = data.data
    
    return (
        <main>
            <div>DashboardContent</div>
            {JSON.stringify(dashboardData)}
        </main>
    )
}

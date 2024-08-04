'use client'

import { getDashboardData } from '@/server/actions'
import { useQuery } from '@tanstack/react-query'
import React from 'react'


const dummyData = {"charts":{"salesOverTime":{"labels":["2024-08-04","2024-08-03","2024-08-02","2024-08-01","2024-07-31","2024-07-30","2024-07-29","2024-07-28","2024-07-27","2024-07-26","2024-07-25","2024-07-24","2024-07-23","2024-07-22","2024-07-21","2024-07-20","2024-07-19","2024-07-18","2024-07-17","2024-07-16","2024-07-15","2024-07-14","2024-07-13","2024-07-12","2024-07-11","2024-07-10","2024-07-09","2024-07-08","2024-07-07","2024-07-06"],"data":[162,174,60,200,96,154,187,172,193,86,162,193,162,159,149,186,151,70,167,92,113,58,153,158,148,158,80,58,157,53]},"userEngagement":{"labels":["Week 1","Week 2","Week 3","Week 4"],"data":[406,448,551,456]}},"tables":{"recentTransactions":[{"id":1,"user":"John Doe","amount":"$53","date":"2023-09-28"},{"id":2,"user":"Jane Smith","amount":"$54","date":"2023-09-27"},{"id":3,"user":"Alice Johnson","amount":"$103","date":"2023-09-26"},{"id":4,"user":"Bob Williams","amount":"$169","date":"2023-09-25"},{"id":5,"user":"Charlie Brown","amount":"$76","date":"2023-09-24"},{"id":6,"user":"David Jones","amount":"$116","date":"2023-09-23"},{"id":7,"user":"Eva Green","amount":"$64","date":"2023-09-26"},{"id":8,"user":"Dwitik Ghosh","amount":"$142","date":"2023-09-26"},{"id":9,"user":"Michael Jackson","amount":"$194","date":"2023-09-26"},{"id":10,"user":"Lucy Liu","amount":"$77","date":"2023-09-26"}],"topProducts":[{"id":"A1","name":"Product A","sales":1157},{"id":"B2","name":"Product B","sales":1018},{"id":"C3","name":"Product C","sales":1030},{"id":"D4","name":"Product D","sales":1054},{"id":"E5","name":"Product E","sales":1039},{"id":"F6","name":"Product F","sales":956},{"id":"G7","name":"Product G","sales":1166},{"id":"R2","name":"Product R","sales":841},{"id":"M2","name":"Product M2","sales":870},{"id":"Q32","name":"Product Q32","sales":1009}]},"map":{"locations":[{"latitude":40.7128,"longitude":-74.006,"label":"New York","activity":573},{"latitude":34.0522,"longitude":-118.2437,"label":"Los Angeles","activity":411},{"latitude":41.8781,"longitude":-87.6298,"label":"Chicago","activity":503},{"latitude":29.7604,"longitude":-95.3698,"label":"Houston","activity":454},{"latitude":33.4484,"longitude":-112.074,"label":"Phoenix","activity":425},{"latitude":37.7749,"longitude":-122.4194,"label":"San Francisco","activity":481},{"latitude":47.6062,"longitude":-122.3321,"label":"Seattle","activity":431},{"latitude":39.9526,"longitude":-75.1652,"label":"Philadelphia","activity":424},{"latitude":38.9072,"longitude":-77.0369,"label":"Washington D.C.","activity":582},{"latitude":25.7617,"longitude":-80.1918,"label":"Miami","activity":522}]}}

export default function DashboardContent() {

    // const { data, isLoading, isError, error } = useQuery({
    //     queryKey: ['dashboard'],
    //     queryFn: () => getDashboardData(),
    //     refetchInterval: 5000, // Refetch data every 5 seconds
    // })


    // if (isLoading) return <LoadingPlaceHolder />

    // if (isError || !data?.success) {
    //     return <PlaceHolder>
    //         <span className='block'>Error Loading Dashboard Data!</span>
    //         {!data?.success && <span className='block text-sm pt-2'>{data?.message}</span>}
    //         <span>{error?.message}</span>
    //     </PlaceHolder>
    // }

    // if (!data.data?.dashboardData) return <PlaceHolder>No Data Available!</PlaceHolder>

    // const { dashboardData } = data.data
    
    const dashboardData = dummyData

    return (
        <main>
            <div>DashboardContent</div>
            <div className='h-40'>Hello</div>
            <div className='h-40'>Hello</div>
            <div className='h-40'>Hello</div>
            <div className='h-40'>Hello</div>
        </main>
    )
}

import DashboardContent from "@/components/DashboardContent"
import { getDashboardData } from "@/server/actions"
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
  QueryClientConfig,
} from '@tanstack/react-query'

export default async function Dashboard() {
  const queryClientConfig: QueryClientConfig = {
    defaultOptions:{ 
        queries: { staleTime: 1000 * 5 },
    }
  }
  const queryClient = new QueryClient(queryClientConfig)

  await queryClient.prefetchQuery({
    queryKey: ['dashboard'],
    queryFn: getDashboardData,
  })
  
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <DashboardContent />
    </HydrationBoundary>
  )
}
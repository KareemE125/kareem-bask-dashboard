import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
import SalesLineChart from "@/components/charts/SalesLineChart";
import UserPieChart from "@/components/charts/UserPieChart";
import { DashboardData } from "@/customTypes/dashboard-data";


export default function ChartsInsights({ data }:{ data: DashboardData }) {
  return (
    <>
    {/* Wide View */}
    <section className="overflow-hidden hidden xl:block">
      <ResizablePanelGroup
        direction="horizontal"
        className="rounded-lg"
      >
        <ResizablePanel defaultSize={65} minSize={35}>
          <SalesLineChart data={data.dashboardData.charts.salesOverTime} />
        </ResizablePanel>
        <ResizableHandle withHandle className="w-4 bg-transparent"/>
        <ResizablePanel defaultSize={35} minSize={30}>
          <UserPieChart data={data.dashboardData.charts.userEngagement} />
        </ResizablePanel>
      </ResizablePanelGroup>
    </section>

    {/* Narrow View */}
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-4 xl:hidden">
         <SalesLineChart data={data.dashboardData.charts.salesOverTime} />
         <UserPieChart data={data.dashboardData.charts.userEngagement} />
         {/* <UserBarChart data={data.dashboardData.charts.userEngagement} /> */}
     </section>
    </>
  )
}





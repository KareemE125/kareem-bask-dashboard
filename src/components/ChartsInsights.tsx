import { DashboardData } from "@/customTypes/dashboard-data";
import SalesLineChart from "@/components/charts/SalesLineChart";
import UserPieChart from "@/components/charts/UserPieChart";
import UserBarChart from "./charts/UserBarChart";

export default function ChartsInsights({ data }:{ data: DashboardData }) {
  return (
    <section className="grid grid-cols-1 xl:grid-cols-2 gap-4">
        <SalesLineChart data={data.dashboardData.charts.salesOverTime} />
        <UserPieChart data={data.dashboardData.charts.userEngagement} />
        {/* <UserBarChart data={data.dashboardData.charts.userEngagement} /> */}
    </section>
  )
}

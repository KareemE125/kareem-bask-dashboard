import CardLayout from "@/components/CardLayout";
import TransactionTable from "@/components/tables/TransactionTable";
import ProductsTable from "@/components/tables/ProductsTable";
import { DashboardData } from "@/customTypes/dashboard-data";

export default function TableInsights({ data }: { data: DashboardData }) {
  return (
    <section className="grid grid-cols-6 gap-4">
      <section className="col-span-6 table-break:col-span-3 xl:col-span-4">
        <CardLayout title="Recent Transactions" description="Browse Recent Users Transactions by dates">
          <TransactionTable data={data.dashboardData.tables.recentTransactions} />
        </CardLayout>
      </section>
      <section className="col-span-6 table-break:col-span-3 xl:col-span-2">
        <CardLayout title="Top Products" description="Browse Top Products' Names and their Sales">
          <ProductsTable data={data.dashboardData.tables.topProducts} />
        </CardLayout>
      </section>
    </section>
  );
}

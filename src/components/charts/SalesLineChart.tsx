import {
  CartesianGrid,
  LabelList,
  Line,
  LineChart,
  XAxis,
  YAxis,
} from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

import { formatDate } from "@/lib/formaters";
import { ChartData } from "@/customTypes/dashboard-data";
import CardLayout from "@/components/CardLayout";


export default function SalesLineChart({ data }: { data: ChartData }) {
  const chartData = data.labels.map((label, index) => ({
    day: formatDate(label),
    sales: data.data[index],
  }));

  const chartConfig = {
    day: {
      label: "Day",
      color: "hsl(var(--primary))",
    }
  } satisfies ChartConfig;

  return (
    <CardLayout
      title="Sales Over Time"
      description={`${formatDate(  data.labels[data.labels.length - 1])} - ${formatDate(data.labels[0])}`}
    >
      <ChartContainer config={chartConfig} className="w-full max-h-[300px]">
        <LineChart
          data={chartData}
          margin={{
            top: 20,
            left: -18,
            right: 12,
          }}
        >
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="day"
            tickLine={false}
            axisLine={true}
            tickMargin={8}
          />
          <YAxis tickLine={false} axisLine={true} tickMargin={8} />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent indicator="line" />}
          />
          <Line
            dataKey="sales"
            type="natural"
            stroke="var(--color-day)"
            strokeWidth={2}
            dot={{
              fill: "var(--color-day)",
            }}
            activeDot={{
              r: 6,
            }}
          >
            <LabelList
              position="top"
              offset={12}
              className="fill-foreground"
              fontSize={12}
            />
          </Line>
        </LineChart>
      </ChartContainer>
    </CardLayout>
  )
}

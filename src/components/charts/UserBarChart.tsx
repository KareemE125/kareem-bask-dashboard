import { Bar, BarChart, XAxis, YAxis } from "recharts"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import CardLayout from "@/components/charts/ChartLayout";
import { ChartData } from "@/customTypes/dashboard-data";


export default function UserBarChart({ data }: { data: ChartData }) {

  const chartData = data.labels.map((label, index) => ({
    week: label.replace(' ','').toLowerCase(),
    users: data.data[index],
    fill: `var(--color-${label.replace(' ','').toLowerCase()})`,
  }));

  const chartConfig = {
    users: {
      label: "Users",
    },
    week1: {
      label: "Week1",
      color: "hsl(var(--chart-1))",
    },
    week2: {
      label: "Week2",
      color: "hsl(var(--chart-2))",
    },
    week3: {
      label: "Week3",
      color: "hsl(var(--chart-3))",
    },
    week4: {
      label: "Week4",
      color: "hsl(var(--chart-4))",
    }
  } satisfies ChartConfig;
  

  return (
    <CardLayout
      title="User Engagements"
      description="User engagement for the month by week"
    >
      <ChartContainer
        config={chartConfig}
        className="mx-auto aspect-square max-h-[300px]"
      >
      <BarChart
            accessibilityLayer
            data={chartData}
            layout="vertical"
            margin={{
              left: 0,
            }}
          >
            <YAxis
              dataKey="week"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) =>
                chartConfig[value as keyof typeof chartConfig]?.label
              }
            />
            <XAxis dataKey="users" type="number" hide />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="users" layout="vertical" radius={5} />
          </BarChart>
      </ChartContainer>
    </CardLayout>
  )
}

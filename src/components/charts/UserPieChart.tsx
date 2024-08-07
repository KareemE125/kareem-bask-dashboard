import { Label, Pie, PieChart } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import CardLayout from "@/components/CardLayout";
import { ChartData } from "@/customTypes/dashboard-data";


export default function UserPieChart({ data }: { data: ChartData }) {

  const totalUsers = data.data.reduce((acc, users) => acc + users, 0);

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
      label: "Week 1",
      color: "hsl(var(--chart-1))",
    },
    week2: {
      label: "Week 2",
      color: "hsl(var(--chart-2))",
    },
    week3: {
      label: "Week 3",
      color: "hsl(var(--chart-3))",
    },
    week4: {
      label: "Week 4",
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
        className="m-auto aspect-square w-full h-[300px]"
      >
        <PieChart className="scale-[1.16] -translate-y-3">
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />
          <Pie
            data={chartData}
            dataKey="users"
            nameKey="week"
            innerRadius={65}
          >
            <Label
              content={({ viewBox }) => {
                if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                  return (
                    <text
                      x={viewBox.cx}
                      y={viewBox.cy}
                      textAnchor="middle"
                      dominantBaseline="middle"
                    >
                      <tspan
                        x={viewBox.cx}
                        y={viewBox.cy}
                        className="fill-foreground text-3xl font-bold"
                      >
                        {totalUsers.toLocaleString()}
                      </tspan>
                      <tspan
                        x={viewBox.cx}
                        y={(viewBox.cy || 0) + 24}
                        className="fill-muted-foreground"
                      >
                        Users
                      </tspan>
                    </text>
                  );
                }
              }}
            />
          </Pie>
          <ChartLegend
              content={<ChartLegendContent nameKey="week" />}
              className="-translate-y-2 flex-wrap gap-2 [&>*]:basis-1/4 [&>*]:justify-center"
            />
        </PieChart>
      </ChartContainer>
    </CardLayout>
  )
}

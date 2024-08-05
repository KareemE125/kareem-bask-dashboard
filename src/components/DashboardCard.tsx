import {
  Card,
  CardDescription,
  CardTitle,
} from "@/components/ui/card"

type DashboardCardProps = {
  title: string
  value: string
  description: string
  icon: React.ReactNode
  className?: string
}

export default function DashboardCard({ title, value, description, icon, className }: DashboardCardProps) {
  return (
    <Card className={className}>
      <div className='py-4 px-6'>
          <div className='flex justify-between items-center pb-3'>
              <h3 className='text-sm font-semibold'>{title}</h3>
              {icon}
          </div>
          <CardTitle className='font-extrabold pb-2'>{value}</CardTitle>
          <CardDescription className='text-xs'>{description}</CardDescription>
      </div>
  </Card>
  )
}

import { LayoutDashboard, ChartArea } from "lucide-react"
import { ReactElement } from "react"

type Route = {
  name: string
  path: string
  icon: ReactElement
}

const appRoutes: Route[] = [
  { name: 'Dashboard', path: '/dashboard', icon: <LayoutDashboard /> },
  { name: 'Sales', path: '/sales', icon: <ChartArea /> },
]

export default appRoutes 
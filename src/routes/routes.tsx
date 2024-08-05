import { LayoutDashboard, Hourglass, ChartArea, Handshake, Settings, Headset, MessageSquareWarning } from "lucide-react"
import { ReactElement } from "react"

type Route = {
  name: string
  path: string
  icon: ReactElement
}

const appRoutes: Route[] = [
  { name: 'Dashboard', path: '/dashboard', icon: <LayoutDashboard /> },
  { name: 'Real Time', path: '/', icon: <Hourglass /> },
  { name: 'Market', path: '/', icon: <ChartArea /> },
  { name: 'Community', path: '/', icon: <Handshake /> },
  { name: 'Settings', path: '/', icon: <Settings /> },
  { name: 'Support', path: '/', icon: <Headset /> },
  { name: 'Feedback', path: '/', icon: <MessageSquareWarning /> },
]

export default appRoutes 
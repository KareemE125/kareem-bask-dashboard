import { Location } from "@/customTypes/dashboard-data";
import CardLayout from "@/components/CardLayout";
import dynamic from 'next/dynamic'

const DynamicMap = dynamic(() => import('@/components/Map'), {
  ssr: false
});

export default function MapInsights({ locations }: { locations: Location[] }) {

  return (
    <CardLayout
      title="Locations"
      description="Browse Locations of Users Activities"
    >
      <DynamicMap locations={locations} />
    </CardLayout>
  )
}

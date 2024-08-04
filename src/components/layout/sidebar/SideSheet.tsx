import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Grip } from "lucide-react"
import SidebarContent from "@/components/layout/sidebar/SidebarContent"

export default function SideSheet() {
  return (
    <Sheet>
      <SheetTrigger><Grip/></SheetTrigger>
      <SheetContent side='left' className="w-72 p-4  pt-9">
        <SidebarContent />
      </SheetContent>
    </Sheet>

  )
}

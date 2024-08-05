import Navbar from "@/components/layout/Navbar";
import Sidebar from "@/components/layout/sidebar/Sidebar";
import SidebarContent from "@/components/layout/sidebar/SidebarContent";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <main className="flex">
      <aside className="hidden md:block h-screen sticky top-0 bottom-0 z-50">
        <Sidebar>
          <SidebarContent />
        </Sidebar>
      </aside>
      <main className="w-full">
        <nav className="w-full sticky top-0 z-40"><Navbar/></nav>
        <main className="p-4 sm:p-8">{children}</main>
      </main>
    </main>
  );
}

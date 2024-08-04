import Navbar from "@/components/layout/Navbar"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main>
      <Navbar/>
      <main>
        <nav>

        </nav>
        <section>
          {children}
        </section>
      </main>
    </main>
  )
}

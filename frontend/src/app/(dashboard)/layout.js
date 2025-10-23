import "@/app/globals.css"
import { Sidebar } from "@/components/Sidebar"
import { Topbar } from "@/components/Topbar"

export const metadata = {
  title: "Payroll Dashboard",
  description: "Minimal Payroll Management System UI",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex h-screen bg-gray-50 text-gray-900">
        <Sidebar />
        <main className="flex-1 flex flex-col">
          <Topbar />
          <div className="p-6 flex-1 overflow-y-auto">{children}</div>
        </main>
      </body>
    </html>
  )
}

import Link from "next/link"
import { Home, Users, Wallet } from "lucide-react"

export function Sidebar() {
  return (
    <aside className="relative w-64 bg-white shadow-sm border-r flex flex-col">
      <div className="p-4 font-bold text-2xl border-b border-black h-15 text-red-600 tracking-wider font-serif">IIHC</div>
      <nav className="flex-1 p-4 space-y-2">
        <NavItem icon={<Home size={18} />} label="Dashboard" href="/" />
        <NavItem icon={<Users size={18} />} label="Employees" href="/employees" />
        <NavItem icon={<Wallet size={18} />} label="Payroll" href="/payroll" />
      </nav>
      <Link href="/settings" className="absolute bottom-0 w-full p-4 border-t border-gray-200 hover:bg-gray-50 transition flex items-center space-x-2">
      Setting
      </Link>
    </aside>
  )
}

function NavItem({ icon, label, href }) {
  return (
    <Link
      href={href}
      className="flex items-center space-x-2 bg-gray-50 border border-gray px-3 py-2 rounded-md text-sm hover:bg-gray-100 transition"
    >
      {icon}
      <span>{label}</span>
    </Link>
  )
}

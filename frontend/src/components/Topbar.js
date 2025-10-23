import { CircleUser } from "lucide-react"
import Link from "next/link"

export function Topbar() {
    const role = { 
    userRole: "Administrator"
   } 
  return (
    <header className="h-15 bg-white flex items-center justify-between px-6 border-b">
      <h1 className="font-medium text-xl">Dashboard {role.userRole}</h1>
      <Link href="/profile" 
      className="p-2 rounded-full hover:bg-gray-100">
        <CircleUser size={30} />
      </Link>
    </header>
  )
}

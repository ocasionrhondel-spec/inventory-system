import { Card } from "@/components/Card"
import { Table } from "@/components/Table"
import { Users, Wallet, Calendar, TrendingUp } from "lucide-react"


export default function DashboardPage() {

  const stats = [
    {
      title: "Total Employees",
      value: "128",
      icon: <Users size={22} />,
    },
    {
      title: "Pending Payrolls",
      value: "5",
      icon: <Wallet size={22} />,
    },
    {
      title: "This Month’s Processed",
      value: "123",
      icon: <Calendar size={22} />,
    },
    {
      title: "Average Salary",
      value: "₱42,000",
      icon: <TrendingUp size={22} />,
    },
  ]

  const employees = [
    { Name: "Khylle Torres", Department: "Teacher", Status: "Active" },
    { Name: "Mark Ocampos", Department: "Teacher", Status: "Active" },
    { Name: "Cristalain Oraa", Department: "Teacher", Status: "On Leave" },
  ]

  return (
    <div className="space-y-6">
      {/* Dashboard header */}
      <div>
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p className="text-gray-500 text-sm">
          Overview of payroll performance and workforce activity.
        </p>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s) => (
          <Card key={s.title} title={s.title} value={s.value} icon={s.icon} />
        ))}
      </div>

      {/* Payroll summary */}
      <Card title="Payroll Summary">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          <div>
            <p className="text-sm text-gray-500">Total Payroll (₱)</p>
            <p className="text-lg font-semibold">512,000</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Bonuses</p>
            <p className="text-lg font-semibold">42,000</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Deductions</p>
            <p className="text-lg font-semibold">18,000</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Net Payout</p>
            <p className="text-lg font-semibold">494,000</p>
          </div>
        </div>
      </Card>

      {/* Employee preview */}
      <Card title="Recent Employees">
        <Table
          columns={["Name", "Department", "Status"]}
          data={employees}
        />
      </Card>
    </div>
  )
}

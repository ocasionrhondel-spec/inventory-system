"use client"

import { useState } from "react"
import { Search, UserPlus, MoreVertical } from "lucide-react"
import { Card } from "@/components/Card"
import { Table } from "@/components/Table"

export default function EmployeesPage() {
  const [query, setQuery] = useState("")

  // Dummy employee data (you can replace this with API data later)
  const employees = [
    { Name: "John Dela Cruz", Department: "Engineering", Salary: "₱60,000", Status: "Active" },
    { Name: "Maria Santos", Department: "Finance", Salary: "₱48,000", Status: "Active" },
    { Name: "Carlos Reyes", Department: "HR", Salary: "₱39,500", Status: "On Leave" },
    { Name: "Angela Cruz", Department: "Marketing", Salary: "₱42,500", Status: "Active" },
    { Name: "Luis Navarro", Department: "IT Support", Salary: "₱38,000", Status: "Inactive" },
  ]

  // Simple search filter
  const filtered = employees.filter((emp) =>
    emp.Name.toLowerCase().includes(query.toLowerCase()) ||
    emp.Department.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold">Employees</h1>
          <p className="text-gray-500 text-sm">
            Manage employee information, status, and salary details.
          </p>
        </div>

        <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded-md mt-3 sm:mt-0 transition">
          <UserPlus size={16} />
          Add Employee
        </button>
      </div>

      {/* Search bar */}
      <Card>
        <div className="flex items-center gap-2 border-b p-3">
          <Search size={18} className="text-gray-500" />
          <input
            type="text"
            placeholder="Search employees..."
            className="flex-1 outline-none p-1 text-sm bg-transparent"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        {/* Employee table */}
        <div className="p-3">
          <Table
            columns={["Name", "Department", "Salary", "Status", "Actions"]}
            data={filtered.map((emp) => ({
              ...emp,
              Actions: (
                <button className="p-1 rounded hover:bg-gray-100 transition">
                  <MoreVertical size={16} />
                </button>
              ),
            }))}
          />
        </div>
      </Card>
    </div>
  )
}

"use client"

import { useState } from "react"
import { Search, FileText, CheckCircle2, Clock, MoreVertical } from "lucide-react"
import { Card } from "@/components/Card"
import { Table } from "@/components/Table"

export default function PayrollPage() {
  const [query, setQuery] = useState("")

  // Dummy payroll data
  const payrolls = [
    {
      Batch: "October 2025 - Week 3",
      Period: "Oct 14 - Oct 20",
      Employees: 128,
      Total: "₱512,000",
      Status: "Processed",
    },
    {
      Batch: "October 2025 - Week 4",
      Period: "Oct 21 - Oct 27",
      Employees: 128,
      Total: "₱498,000",
      Status: "Pending",
    },
    {
      Batch: "September 2025 - Week 4",
      Period: "Sep 23 - Sep 29",
      Employees: 127,
      Total: "₱501,500",
      Status: "Processed",
    },
  ]

  // Filter payrolls
  const filtered = payrolls.filter((p) =>
    p.Batch.toLowerCase().includes(query.toLowerCase()) ||
    p.Status.toLowerCase().includes(query.toLowerCase())
  )

  // Helper for colored status labels
  const StatusBadge = ({ status }) => {
    const colors =
      status === "Processed"
        ? "bg-green-100 text-green-700"
        : "bg-yellow-100 text-yellow-700"

    const Icon = status === "Processed" ? CheckCircle2 : Clock
    return (
      <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-md text-xs font-medium ${colors}`}>
        <Icon size={12} />
        {status}
      </span>
    )
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold">Payroll</h1>
          <p className="text-gray-500 text-sm">
            Manage payroll batches, review totals, and track payment status.
          </p>
        </div>

        <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded-md mt-3 sm:mt-0 transition">
          <FileText size={16} />
          Generate Payroll
        </button>
      </div>

      {/* Search bar */}
      <Card>
        <div className="flex items-center gap-2 border-b p-3">
          <Search size={18} className="text-gray-500" />
          <input
            type="text"
            placeholder="Search payroll batch or status..."
            className="flex-1 outline-none p-1 text-sm bg-transparent"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        {/* Payroll table */}
        <div className="p-3">
          <Table
            columns={["Batch", "Period", "Employees", "Total", "Status", "Actions"]}
            data={filtered.map((p) => ({
              ...p,
              Status: <StatusBadge status={p.Status} />,
              Actions: (
                <button className="p-1 rounded hover:bg-gray-100 transition" title="More">
                  <MoreVertical size={16} />
                </button>
              ),
            }))}
          />
        </div>
      </Card>

      {/* Payroll summary */}
      <Card title="Monthly Summary">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          <div>
            <p className="text-sm text-gray-500">Total Payroll</p>
            <p className="text-lg font-semibold">₱2,048,000</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Pending Batches</p>
            <p className="text-lg font-semibold">2</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Processed Batches</p>
            <p className="text-lg font-semibold">6</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Average Payout</p>
            <p className="text-lg font-semibold">₱41,000</p>
          </div>
        </div>
      </Card>
    </div>
  )
}

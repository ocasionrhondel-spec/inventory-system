"use client"

import { useState } from "react"
import { User, Edit3, Save, Mail, Briefcase, Calendar, DollarSign } from "lucide-react"
import { Card } from "@/components/Card"

export default function ProfilePage() {
  const [editing, setEditing] = useState(false)
  const [profile, setProfile] = useState({
    name: "John Dela Cruz",
    email: "john.delacruz@company.com",
    position: "Software Engineer",
    department: "Engineering",
    salary: "₱60,000",
    dateHired: "March 12, 2022",
  })

  const handleChange = (field, value) => {
    setProfile({ ...profile, [field]: value })
  }

  const toggleEdit = () => setEditing(!editing)

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold">Profile</h1>
          <p className="text-gray-500 text-sm">
            View and manage your personal and employment details.
          </p>
        </div>

        <button
          onClick={toggleEdit}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded-md mt-3 sm:mt-0 transition"
        >
          {editing ? <Save size={16} /> : <Edit3 size={16} />}
          {editing ? "Save Changes" : "Edit Profile"}
        </button>
      </div>

      {/* Profile Overview Card */}
      <Card>
        <div className="flex flex-col sm:flex-row items-center sm:items-start p-6 gap-6">
          <div className="flex items-center justify-center h-24 w-24 rounded-full bg-blue-100 text-blue-600 text-3xl font-semibold">
            {profile.name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </div>
          <div className="flex-1 space-y-3">
            <h2 className="text-xl font-semibold flex items-center gap-2">
              <User size={18} /> {profile.name}
            </h2>
            <div className="grid sm:grid-cols-2 gap-3 text-sm">
              <InfoField
                icon={<Mail size={14} />}
                label="Email"
                value={profile.email}
                editable={editing}
                onChange={(v) => handleChange("email", v)}
              />
              <InfoField
                icon={<Briefcase size={14} />}
                label="Position"
                value={profile.position}
                editable={editing}
                onChange={(v) => handleChange("position", v)}
              />
              <InfoField
                icon={<Briefcase size={14} />}
                label="Department"
                value={profile.department}
                editable={editing}
                onChange={(v) => handleChange("department", v)}
              />
              <InfoField
                icon={<DollarSign size={14} />}
                label="Monthly Salary"
                value={profile.salary}
                editable={editing}
                onChange={(v) => handleChange("salary", v)}
              />
              <InfoField
                icon={<Calendar size={14} />}
                label="Date Hired"
                value={profile.dateHired}
                editable={false}
              />
            </div>
          </div>
        </div>
      </Card>

      {/* Payroll Summary Card */}
      <Card title="Recent Payroll Summary">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
          <SummaryItem label="Last Payroll" value="₱60,000" />
          <SummaryItem label="Deductions" value="₱2,500" />
          <SummaryItem label="Net Pay" value="₱57,500" />
        </div>
      </Card>
    </div>
  )
}

/* ===== Subcomponents ===== */

function InfoField({ icon, label, value, editable, onChange }) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-gray-500 text-xs flex items-center gap-1">
        {icon} {label}
      </label>
      {editable ? (
        <input
          type="text"
          className="border rounded-md px-2 py-1 text-sm focus:ring-2 focus:ring-blue-400 outline-none"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      ) : (
        <p className="font-medium">{value}</p>
      )}
    </div>
  )
}

function SummaryItem({ label, value }) {
  return (
    <div>
      <p className="text-sm text-gray-500">{label}</p>
      <p className="text-lg font-semibold">{value}</p>
    </div>
  )
}

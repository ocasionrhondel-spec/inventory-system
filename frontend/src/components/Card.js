export function Card({ title, value, icon, children }) {
  return (
    <div className="bg-white border rounded-xl shadow-sm hover:shadow-md transition">
      <div className="flex items-center justify-between p-5 border-b">
        <div>
          {title && <p className="text-sm text-gray-500">{title}</p>}
          {value && <p className="text-2xl font-semibold">{value}</p>}
        </div>
        {icon && <div className="text-gray-400">{icon}</div>}
      </div>
      {children && <div className="p-5">{children}</div>}
    </div>
  )
}

export default function TableSkeletonLoader({ rows = 5 }) {
  return (
    <div className="overflow-x-auto border border-gray-200 rounded-lg">
      <table className="w-full text-sm text-left animate-pulse">
        {/* Table Header Skeleton */}
        <thead className="bg-gray-50 text-gray-700">
          <tr>
            <th className="px-4 py-3 border-b-2 border-gray-200">
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            </th>
            <th className="px-4 py-3 border-b-2 border-gray-200">
              <div className="h-4 bg-gray-200 rounded w-1/2"></div>
            </th>
            <th className="px-4 py-3 border-b-2 border-gray-200">
              <div className="h-4 bg-gray-200 rounded w-1/3"></div>
            </th>
          </tr>
        </thead>
        {/* Table Body Skeleton */}
        <tbody className="bg-white">
          {/* We create an array of a certain length and map over it to generate skeleton rows */}
          {Array.from({ length: rows }).map((_, i) => (
            <tr key={i} className="border-b last:border-0 even:bg-gray-50">
              <td className="px-4 py-3">
                <div className="h-4 bg-gray-200 rounded w-5/6"></div>
              </td>
              <td className="px-4 py-3">
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              </td>
              <td className="px-4 py-3">
                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}


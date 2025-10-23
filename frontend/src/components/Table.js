export function Table({ columns, data }) {
  return (
    <div className="overflow-x-auto border border-gray-200 rounded-lg">
      <table className="w-full text-sm text-left">
        <thead className="bg-gray-50 text-gray-700">
          <tr>
            {columns.map((col) => (
              <th key={col} className="px-4 py-3 border-b-2 border-gray-200 font-semibold">
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white">
          {data.map((row, i) => (
            <tr
              key={i}
              // `even:bg-gray-50` applies a background to every even row.
              // We also adjust the hover color to be visible on both white and gray rows.
              className="border-b last:border-0 transition hover:bg-gray-100 even:bg-gray-50"
            >
              {columns.map((col) => (
                <td key={col} className="px-4 py-3 text-gray-800">
                  {row[col]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}


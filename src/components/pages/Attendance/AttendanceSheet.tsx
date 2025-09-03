import { useState } from 'react';

const employees = ['Juan Dela Cruz', 'Maria Santos', 'Pedro Reyes', 'Ana Cruz'];

export default function AttendanceSheet() {
  const [headers, setHeaders] = useState(['Day', 'Night']);
  const daysInMonth = 30; // example September

  return (
    <div className="bg-background text-text min-h-screen p-6">
      <h1 className="font-heading text-secondary mb-6 text-2xl font-bold">
        Attendance Sheet - September
      </h1>

      <div className="overflow-x-auto rounded-xl border border-gray-300 shadow-lg">
        <table className="min-w-full border-collapse">
          <thead className="bg-secondary text-off-white">
            <tr>
              <th className="w-28 border border-gray-300 p-3">Day</th>
              <th className="w-28 border border-gray-300 p-3">Date</th>
              {headers.map((header, idx) => (
                <th
                  key={idx}
                  className="border border-gray-300 p-3 text-center"
                >
                  <select
                    value={header}
                    onChange={(e) => {
                      const newHeaders = [...headers];
                      newHeaders[idx] = e.target.value;
                      setHeaders(newHeaders);
                    }}
                    className="border-off-white text-off-white border-b bg-transparent px-1 focus:outline-none"
                  >
                    <option value="Day">Day</option>
                    <option value="Night">Night</option>
                  </select>
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="bg-off-white">
            {Array.from({ length: daysInMonth }, (_, i) => {
              const date = i + 1;
              const weekday = new Date(2024, 8, date).toLocaleDateString(
                'en-US',
                {
                  weekday: 'long',
                }
              );

              return (
                <tr key={i} className="hover:bg-accent/10 transition">
                  <td className="text-secondary border border-gray-300 p-2 font-semibold">
                    {weekday}
                  </td>
                  <td className="border border-gray-300 p-2 text-center">
                    {date}
                  </td>
                  {headers.map((_, colIdx) => (
                    <td
                      key={colIdx}
                      className="border border-gray-300 p-2 text-center"
                    >
                      <select className="focus:ring-primary w-full rounded-md border border-gray-300 px-2 py-1 focus:ring-2">
                        <option value="">-- Select --</option>
                        {employees.map((emp, empIdx) => (
                          <option key={empIdx} value={emp}>
                            {emp}
                          </option>
                        ))}
                      </select>
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

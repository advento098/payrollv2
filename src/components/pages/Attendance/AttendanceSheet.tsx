import { useState } from 'react';

const employees = ['Juan Dela Cruz', 'Maria Santos', 'Pedro Reyes', 'Ana Cruz'];

export default function AttendanceSheet() {
  const [headers, setHeaders] = useState(['Day', 'Night']);
  const daysInMonth = 30;

  function renderTable(start: number, end: number) {
    return (
      <table className="w-full border-collapse rounded-xl border border-gray-300 shadow-md">
        <thead className="bg-secondary text-off-white">
          <tr>
            <th className="w-28 border border-gray-300 p-2">Day</th>
            <th className="w-20 border border-gray-300 p-2">Date</th>
            {headers.map((header, idx) => (
              <th key={idx} className="border border-gray-300 p-2 text-center">
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
          {Array.from({ length: end - start + 1 }, (_, i) => {
            const date = start + i;
            const weekday = new Date(2024, 8, date).toLocaleDateString(
              'en-US',
              {
                weekday: 'long',
              }
            );

            return (
              <tr key={date} className="hover:bg-accent/10 transition">
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
    );
  }

  return (
    <div className="bg-background text-text min-h-screen p-6">
      <h1 className="font-heading text-secondary mb-6 text-center text-2xl font-bold">
        Attendance Sheet - September
      </h1>

      <div className="grid grid-cols-2 gap-6">
        {/* First Half */}
        <div>
          <h2 className="text-primary mb-2 font-semibold">1st Half (1–15)</h2>
          <div className="max-h-[80vh] overflow-y-auto">
            {renderTable(1, 15)}
          </div>
        </div>

        {/* Second Half */}
        <div>
          <h2 className="text-primary mb-2 font-semibold">2nd Half (16–30)</h2>
          <div className="max-h-[80vh] overflow-y-auto">
            {renderTable(16, daysInMonth)}
          </div>
        </div>
      </div>
    </div>
  );
}

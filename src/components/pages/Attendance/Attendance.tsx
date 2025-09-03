import clsx from 'clsx';
import { useState } from 'react';
import AttendanceSheet from './AttendanceSheet';

export default function Attendance() {
  const title: string = 'Angeles';
  const [test, setTest] = useState<boolean>(false);
  const [selector, setSelector] = useState<boolean>(false);

  const handleSelectorClick = () => {
    setSelector((prev) => !prev);
  };

  const variants = {
    tableHeader: 'border-2 border-r-0 border-b-0 px-2 py-1 text-center',
    tableData: 'border-2 border-r-0 min-w-40 border-b-0 px-2 py-1 text-center',
    nullDataHeader: 'border-2 border-r-0 min-w-40 border-b-0 px-2 py-1',
  } as const;

  return (
    <main className="flex h-dvh w-[80%] flex-col items-center overflow-y-scroll border-2">
      <AttendanceSheet />
    </main>
  );
}

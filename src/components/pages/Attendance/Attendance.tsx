import AttendanceSheet from './AttendanceSheet';

export default function Attendance() {
  return (
    <main className="flex h-dvh w-[80%] flex-col items-center overflow-y-scroll border-2">
      <AttendanceSheet />
    </main>
  );
}

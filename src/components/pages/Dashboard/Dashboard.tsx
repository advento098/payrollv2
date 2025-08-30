// import { Routes, Route } from 'react-router-dom';
import Card from '../../../ui/Card';

export default function Dashboard() {
  return (
    <main className="w-[80%]">
      {/* Cards holder */}
      <div className="main-container flex h-full w-full flex-col items-center overflow-y-hidden border-2 border-cyan-500 p-10">
        <Card type="simple"></Card>
      </div>
    </main>
  );
}

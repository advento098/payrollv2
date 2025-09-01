// import { Routes, Route } from 'react-router-dom';
import Card from '../../../ui/Card';

export default function Dashboard() {
  return (
    <main className="h-dvh w-[80%] p-10 pb-0">
      {/* Cards holder */}
      <div className="main-container flex h-full flex-col items-center gap-5 overflow-y-scroll border-2">
        <div className="sticky top-0 z-10">---search bar here---</div>
        <Card type="simple"></Card>
        <Card type="simple"></Card>
        <Card type="simple"></Card>
        <Card type="simple"></Card>
        <Card type="simple"></Card>
      </div>
    </main>
  );
}

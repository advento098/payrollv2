// import { Routes, Route } from 'react-router-dom';
import Card from '../../../ui/Card';

export default function Dashboard() {
  return (
    <main className="flex h-dvh w-[80%] flex-col overflow-y-scroll p-10 pb-0">
      {/* Cards holder */}
      <div className="sticky top-0 z-10 mx-auto mb-10">
        ---search bar here---
      </div>
      <div className="main-container flex flex-col items-center gap-5">
        <Card type="simple"></Card>
        <Card type="simple"></Card>
        <Card type="simple"></Card>
        <Card type="simple"></Card>
        <Card type="simple"></Card>
      </div>
    </main>
  );
}

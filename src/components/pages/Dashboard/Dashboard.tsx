// import { Routes, Route } from 'react-router-dom';
import Card from '../../../ui/Card';
import SearchBar from '../../../ui/SearchBar';

export default function Dashboard() {
  return (
    <main className="bg-off-white flex h-dvh w-[80%] flex-col overflow-y-scroll p-10 pb-0">
      {/* Cards holder */}
      <SearchBar />

      <div className="main-container flex flex-col items-center gap-5 pb-10">
        <Card id={0} type="simple"></Card>
        <Card id={1} type="simple"></Card>
        <Card id={2} type="simple"></Card>
        <Card id={3} type="simple"></Card>
        <Card id={4} type="simple"></Card>
      </div>
    </main>
  );
}

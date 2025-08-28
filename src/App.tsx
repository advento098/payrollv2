import Header from './components/Header/Header.tsx';
import Assignment from './components/pages/Assignment.tsx';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './components/pages/Dashboard.tsx';
import Edit from './components/pages/Edit.tsx';

export default function App() {
  return (
    <>
      {/* Smaller device blocker */}
      <div className="fixed inset-0 z-100 h-dvh w-dvw bg-amber-300 lg:hidden"></div>
      <div className="mx-auto flex">
        <Header />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/assignment" element={<Assignment />} />
          <Route path="/edit" element={<Edit />} />
        </Routes>
      </div>
    </>
  );
}

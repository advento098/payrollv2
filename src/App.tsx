import Header from './components/Header/Header.tsx';
import { Outlet } from 'react-router-dom';

export default function App() {
  return (
    <>
      {/* Smaller device blocker */}
      <div className="fixed inset-0 z-100 h-dvh w-dvw bg-amber-300 lg:hidden"></div>
      <div className="flex">
        <Header />
        <Outlet />
      </div>
    </>
  );
}

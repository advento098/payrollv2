import Header from './components/pages/Header/Header.tsx';
import { Outlet } from 'react-router-dom';

export default function App() {
  return (
    <>
      {/* Warning on small screens */}
      <div className="fixed inset-0 z-200 flex h-dvh w-dvw items-center justify-center bg-amber-300 lg:hidden">
        <div className="flex h-fit w-fit items-center justify-center gap-3 rounded-xl border border-yellow-400 bg-yellow-100 px-4 py-3 text-center text-yellow-800 shadow-md">
          <span className="material-symbols-outlined text-2xl text-yellow-600">
            warning
          </span>
          <p className="font-medium">
            This system is designed to be used on{' '}
            <span className="font-bold">computers</span> only. For the best
            experience, please switch from mobile to desktop.
          </p>
        </div>
      </div>
      <div className="flex">
        <Header />
        <Outlet />
      </div>
    </>
  );
}

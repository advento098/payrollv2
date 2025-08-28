import Header from './components/Header/Header.tsx';
import Assignment from './components/Assignment.tsx';

export default function App() {
  return (
    <>
      {/* Smaller device blocker */}
      <div className="fixed inset-0 z-100 h-dvh w-dvw bg-amber-300 lg:hidden"></div>
      <div className="mx-auto flex">
        <Header />
        <Assignment />
      </div>
    </>
  );
}

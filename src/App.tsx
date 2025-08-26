import Header from './components/Header/Header.tsx';

export default function App() {
  return (
    <>
      {/* Smaller device blocker */}
      <div className="fixed inset-0 h-dvh w-dvw bg-amber-300 lg:hidden"></div>
      <div className="mx-auto flex max-w-[1500px]">
        <Header />
        <main className="h-dvh"></main>
      </div>
    </>
  );
}

import centerTextLogo from '/bongkim_logo_center_text.svg';

function App() {
  return (
    <>
      <header className="fixed top-0 left-0 z-100 w-full">
        <img
          src={centerTextLogo}
          alt="bongkim_center_text"
          className="mx-auto w-1/8 border-2"
        />
      </header>
      <main className="h-dvh">
        <nav className="h-full w-2xs border-2 border-red-700">
          <ul className="list-none">
            <li>a</li>
          </ul>
        </nav>
      </main>
    </>
  );
}

export default App;

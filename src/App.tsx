import { useEffect, useState } from 'react';
import centerTextLogo from '/bongkim_logo_center_text.svg';
import ListItem from './ui/ListItem';

function App() {
  console.log('Screen width is: ' + window.screen.width);
  const [smallScreen, setSmallScreen] = useState(false);

  const handleResize = () => {
    if (window.innerWidth < 1024) setSmallScreen(true);
    else setSmallScreen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      setSmallScreen(window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {smallScreen && (
        <div className="fixed inset-0 h-dvh w-dvw bg-amber-300"></div>
      )}
      <div className="mx-auto flex max-w-[1440px]">
        <header className="h-dvh resize-x border-2">
          <nav className="h-full w-2xs border-2 border-red-700">
            <img
              src={centerTextLogo}
              alt="bongkim_center_text"
              className="mx-auto w-1/2"
            />
            <ul className="mt-4 list-none text-center">
              <ListItem icon="assignment_ind">Assignment</ListItem>
              <ListItem icon="dashboard">Dashboard</ListItem>
              <ListItem icon="edit">Edit</ListItem>
            </ul>
          </nav>
        </header>
        <main className="h-dvh"></main>
      </div>
    </>
  );
}

export default App;

import SideBar from './SideBar';

export default function Header() {
  return (
    <header className="bg-background z-100 h-dvh w-[20%] resize-x p-5 shadow-lg shadow-black">
      <SideBar></SideBar>
    </header>
  );
}

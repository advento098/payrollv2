import centerTextLogo from '/bongkim_logo_center_text.svg';
import ListItem from '../../ui/ListItem';
import Button from '../../ui/Button';

export default function SideBar() {
  return (
    <nav className="flex h-full max-w-2xs flex-col">
      <img
        src={centerTextLogo}
        alt="bongkim_center_text"
        className="mx-auto w-[75%]"
      />
      <ul className="font-heading mt-10 list-none text-center">
        <ListItem icon="assignment_ind">Assignment</ListItem>
        <ListItem icon="dashboard">Dashboard</ListItem>
        <ListItem icon="edit">Edit</ListItem>
      </ul>
      <Button variant="logoutButton" onClick={() => console.log('Clicked')}>
        Logout
      </Button>
    </nav>
  );
}

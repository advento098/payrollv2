import centerTextLogo from '/bongkim_logo_center_text.svg';
import ListItem from '../../../ui/ListItem';
import Button from '../../../ui/Button';

export default function SideBar() {
  return (
    <nav className="text-text flex h-full max-w-2xs flex-col">
      <img
        src={centerTextLogo}
        alt="bongkim_center_text"
        className="mx-auto w-[75%]"
      />
      <ul className="font-heading mt-10 list-none text-center">
        <ListItem href="/dashboard" icon="dashboard">
          Dashboard
        </ListItem>
        <ListItem href="/assignment" icon="assignment_ind">
          Assignment
        </ListItem>
        <ListItem href="/edit" icon="edit">
          Edit / Add
        </ListItem>
      </ul>
      <Button variant="logoutButton" href="login">
        Logout
      </Button>
    </nav>
  );
}

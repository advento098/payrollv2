import React, { useState } from 'react';
import Button from './Button';

type ListItemProps = {
  icon: string;
  children: React.ReactNode;
};

export default function ListItem({ icon, children }: ListItemProps) {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    if (active) {
      setActive((prev) => !prev);
    }
  };

  return (
    <li className="mt-10">
      <Button className="h-full w-full" onClick={handleClick}>
        <span className="material-symbols-outlined">{icon}</span>
        {children}
      </Button>
    </li>
  );
}

import React, { act, useState } from 'react';

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
    <li className="mt-5 border-2">
      <button
        className="pointer mx-auto flex flex-col justify-center gap-2 outline-none"
        onClick={handleClick}
      >
        <span className="material-symbols-outlined">{icon}</span>
        {active ? children : ''}
      </button>
    </li>
  );
}

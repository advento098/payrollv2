import React, { useState } from 'react';
import Button from './Button';
import clsx from 'clsx';

type ListItemProps = {
  icon: string;
  children?: React.ReactNode;
  href: string;
  variant?: 'navButton' | 'logoutButton' | 'generateUserPDF';
  tooltip?: string;
};

export default function ListItem({
  icon,
  children,
  href,
  variant,
  tooltip,
}: ListItemProps) {
  const [active, setActive] = useState(false);

  const variants: Record<string, string> = {
    dashBoardList: 'flex flex-col !text-4xl',
    sidebarList: ' h-full w-full',
  };
  const handleClick = () => {
    if (active) {
      setActive((prev) => !prev);
    }
  };

  return (
    <li className={'mt-10'}>
      <Button
        variant={variant}
        href={href}
        className={variants.sidebarList}
        tooltip={tooltip}
      >
        <span className="material-symbols-outlined text-secondary group-hover:text-white">
          {icon}
        </span>
        {children}
      </Button>
    </li>
  );
}

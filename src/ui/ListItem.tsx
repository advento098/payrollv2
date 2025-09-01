import React, { useState } from 'react';
import Button from './Button';
import clsx from 'clsx';

type ListItemProps = {
  icon: string;
  children?: React.ReactNode;
  href: string;
  variant?: 'navButton' | 'logoutButton' | 'iconOnly';
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

  const isIconOnly: string =
    variant == 'iconOnly' ? variants.dashBoardList : '';

  const handleClick = () => {
    if (active) {
      setActive((prev) => !prev);
    }
  };

  return (
    <li className={variant == 'iconOnly' ? '' : 'mt-10'}>
      <Button
        variant={variant}
        href={href}
        className={
          variant == 'iconOnly' ? variants.dashBoardList : variants.sidebarList
        }
        tooltip={tooltip}
      >
        <span
          className={clsx(
            'material-symbols-outlined text-secondary group-hover:text-white',
            isIconOnly
          )}
        >
          {icon}
        </span>
        {children}
      </Button>
    </li>
  );
}

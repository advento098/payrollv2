import type { MouseEventHandler, ReactNode } from 'react';
import clsx from 'clsx';
import {
  Link,
  useResolvedPath,
  useMatch,
  type Path,
  type PathMatch,
} from 'react-router-dom';

type ButtonType = {
  className?: string;
  children: ReactNode;
  variant?: 'navButton' | 'logoutButton' | 'iconOnly';
  href?: string;
  tooltip?: string;
  onClick?: MouseEventHandler;
};

export default function Button({
  className = '',
  onClick,
  children,
  variant = 'navButton',
  href = '/',
  tooltip,
}: ButtonType) {
  const variants: Record<string, string> = {
    navButton:
      'pointer font-body border-2 font-heading text-xl flex items-center gap-3 rounded-sm px-[2vw] py-5 shadow-sm shadow-black/70 outline-none hover:cursor-pointer hover:bg-secondary hover:!text-white text-secondary border-secondary',

    logoutButton:
      'mt-auto w-50 p-2 font-heading place-self-center text-center pointer rounded-sm shadow-sm shadow-black/70 outline-none hover:cursor-pointer hover:bg-secondary hover:!text-white text-secondary border-secondary',

    iconOnly: '',
    iconActive: 'bg-secondary rounded-full text-white',
    navButtonActive: 'bg-primary text-white',
  };

  const resolvedPath: Path = useResolvedPath(href);
  const pathIsMatched: PathMatch | null = useMatch({
    path: resolvedPath.pathname,
    end: true,
  });

  return (
    <Link
      to={href}
      className={clsx("group",variants[variant], className)}
      title={tooltip}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}

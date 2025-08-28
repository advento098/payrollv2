import type { MouseEventHandler, ReactNode } from 'react';

type ButtonType = {
  className?: string;
  onClick: MouseEventHandler;
  children: ReactNode;
  variant?: 'navButton' | 'logoutButton';
};

export default function Button({
  className = '',
  onClick,
  children,
  variant = 'navButton',
}: ButtonType) {
  const variants: Record<string, string> = {
    navButton:
      'pointer hover:bg-secondary font-body border-2 font-heading text-xl flex items-center gap-3 rounded-sm px-[2vw] py-5 shadow-sm shadow-black/70 outline-none hover:cursor-pointer hover:text-white',
    logoutButton:
      'mt-auto w-50 p-2 font-heading place-self-center text-center pointer hover:bg-secondary rounded-sm shadow-sm shadow-black/70 outline-none hover:cursor-pointer hover:text-white',
  };

  return (
    <button className={variants[variant] + ' ' + className} onClick={onClick}>
      {children}
    </button>
  );
}

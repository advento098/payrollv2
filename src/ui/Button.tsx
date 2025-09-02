import type { MouseEvent, ReactNode } from 'react';
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
  children?: ReactNode;
  variant?: 'navButton' | 'logoutButton' | 'generateUserPDF';
  href?: string;
  tooltip?: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  id?: number;
};

export default function Button({
  className = '',
  id,
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

    generateUserPDF:
      'mt-4 w-full px-4 py-2 font-heading text-sm text-white bg-primary rounded-md shadow-md shadow-black/40 hover:bg-secondary hover:!text-off-white transition-colors duration-300 ease-in-out cursor-pointer',

    iconActive: 'bg-secondary rounded-full text-white',
    navButtonActive: 'bg-primary text-white',
  };

  const resolvedPath: Path = useResolvedPath(href);
  const pathIsMatched: PathMatch | null = useMatch({
    path: resolvedPath.pathname,
    end: true,
  });

  function handlePDFDownload(event: MouseEvent<HTMLButtonElement>) {
    console.log(`Opening PDF #: ${event.currentTarget.id}`);
  }

  return variant === 'generateUserPDF' ? (
    <PDFButton
      className={clsx(variants[variant], className)}
      onClick={handlePDFDownload}
      id={id!}
    />
  ) : (
    <Link
      to={href}
      className={clsx('group', variants[variant], className)}
      title={tooltip}
    >
      {children}
    </Link>
  );
}

type PDFButtonType = {
  className: string;
  id: number;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
};

export function PDFButton({ id, className, onClick }: PDFButtonType) {
  return (
    <button id={id?.toString()} className={className} onClick={onClick}>
      Download PDF
    </button>
  );
}

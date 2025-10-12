import clsx from 'clsx';
import { ReactNode } from 'react';

type ContainerTypes = {
  children: ReactNode;
  className?: string;
};
export const Container = ({ children, className }: ContainerTypes) => {
  return (
    <div className={`${clsx(className)} container mx-auto px-4`}>
      {children}
    </div>
  );
};

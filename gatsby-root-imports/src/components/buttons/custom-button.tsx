import React from 'react';

interface Props extends React.ComponentPropsWithoutRef<'button'> {
  children: React.ReactNode;
}

export const CustomButton: React.FC<Props> = ({ children, ...rest }) => (
  <button {...rest}>{children}</button>
);

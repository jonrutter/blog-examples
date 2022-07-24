import React from 'react';
import type { PolymorphicProps } from '../utils/polymorphic';

type Props = {
  title?: React.ReactNode;
  children: React.ReactNode;
};

export const Container = <T extends React.ElementType = 'div'>({
  as,
  title,
  children,
  ...rest
}: PolymorphicProps<T, Props>) => {
  const Tag = as || 'div';
  return <Tag {...rest}>{children}</Tag>;
};

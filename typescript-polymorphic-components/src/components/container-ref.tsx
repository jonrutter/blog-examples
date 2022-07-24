import React from 'react';
import {
  PolymorphicPropsWithRef,
  PolymorphicRef,
  PC,
} from '../utils/polymorphic';

type Props = {
  title?: React.ReactNode;
  children: React.ReactNode;
};

export const Container: PC<Props, 'div'> = React.forwardRef(
  <T extends React.ElementType = 'div'>(
    { as, title, children, ...rest }: PolymorphicPropsWithRef<T, Props>,
    ref?: PolymorphicRef<T>
  ) => {
    const Tag = as || 'div';

    return (
      <Tag {...rest} ref={ref}>
        {children}
      </Tag>
    );
  }
);

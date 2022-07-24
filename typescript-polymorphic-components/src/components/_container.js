import React from 'react';

// component:
export const Container = ({ as, children, ...rest }) => {
  const Tag = as || 'div';
  return <Tag {...rest}>{children}</Tag>;
};

// using the component:
export const MainContainer = () => {
  return <Container as="main">Hello, world!</Container>;
};
// renders: <main>Hello, world!</main>

// button example

const Button = ({ as, children, ...rest }) => {
  const Tag = as || 'button';
  return <Tag {...rest}>{children}</Tag>;
};

// note that there are no editor errors in any of the following components, even though they would all render invalid HTML markup

// element with an invalid attribute
export const BadButton = () => {
  // buttons aren't supposed to have an 'href'!
  return (
    <Button as="button" href="/">
      Button
    </Button>
  );
};

// element with an invalid tag type:
export const InvalidTag = () => {
  // will render as <potato>...</potato>
  return <Button as="potato">This is totally wrong.</Button>;
};

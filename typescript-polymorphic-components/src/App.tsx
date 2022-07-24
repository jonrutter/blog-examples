import React, { useRef } from 'react';
import './App.css';

import { Container } from './components/container';
import { Container as ContainerWithRef } from './components/container-ref';

export const App = () => {
  const testRef = useRef<HTMLAnchorElement>(null);
  return (
    <>
      <Container as="main">Hello, world!</Container>;
      <ContainerWithRef as="a" ref={testRef}>
        Howdy, world!
      </ContainerWithRef>
    </>
  );
};
export default App;

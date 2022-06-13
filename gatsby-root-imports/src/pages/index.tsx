import React from 'react';

// absolute import:
import { CustomButton } from 'src/components/buttons/custom-button';

// styles
const pageStyles = {
  color: '#232129',
  padding: 96,
  fontFamily: '-apple-system, Roboto, sans-serif, serif',
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};
const headingAccentStyles = {
  color: '#663399',
};

const linkStyle = {
  color: '#8954A8',
  fontWeight: 'bold',
  fontSize: 16,
  verticalAlign: '5%',
};

const IndexPage = () => (
  <main style={pageStyles}>
    <title>Home Page</title>
    <h1 style={headingStyles}>
      Congratulations
      <br />
      <span style={headingAccentStyles}>— you just made a Gatsby site! </span>
      🎉🎉🎉
    </h1>
    <p>
      This project was configured to use absolute imports with import aliases,
      for easy file imports. 😎
    </p>
    <p>
      This is a <CustomButton>Custom Button</CustomButton> component imported
      from far away!
    </p>
    <p>
      Check out my blog post on{' '}
      <a
        href="https://www.jonrutter.io/blog/gatsby-root-imports"
        style={linkStyle}
      >
        using absolute imports in Gatsby
      </a>{' '}
      for more information
    </p>
  </main>
);

export default IndexPage;

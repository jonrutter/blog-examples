import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Layout from '../components/layout';

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <StaticImage src="../images/featured.jpg" alt="The northern lights" />
      <p>I'm making this by following the Gatsby Tutorial.</p>
    </Layout>
  );
};

export default IndexPage;

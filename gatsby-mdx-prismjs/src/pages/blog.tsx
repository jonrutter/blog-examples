import * as React from 'react';
import { PageProps, graphql } from 'gatsby';
import Layout from '../components/layout';

type BlogNode = {
  name: string;
  id: string;
};

type DataProps = {
  allFile: {
    nodes: BlogNode[];
  };
};

const BlogPage = ({ data }: PageProps<DataProps>) => {
  const {
    allFile: { nodes },
  } = data;
  return (
    <Layout pageTitle="My Blog Posts">
      <ul>
        {nodes.map((node) => (
          <li key={node.id}>{node.name}</li>
        ))}
      </ul>
    </Layout>
  );
};

export const query = graphql`
  query {
    allFile(filter: { sourceInstanceName: { eq: "blog" } }) {
      nodes {
        id
        name
      }
    }
  }
`;

export default BlogPage;

import * as React from 'react';
import { PageProps, graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import Layout from '../components/layout';

type BlogNode = {
  frontmatter: {
    title: string;
    date: string;
  };
  id: string;
  body: string;
};

type DataProps = {
  allMdx: {
    nodes: BlogNode[];
  };
};

const BlogPage = ({ data }: PageProps<DataProps>) => {
  const {
    allMdx: { nodes },
  } = data;
  return (
    <Layout pageTitle="My Blog Posts">
      {nodes.map((node) => (
        <article key={node.id}>
          <h2>{node.frontmatter.title}</h2>
          <p>Posted: {node.frontmatter.date}</p>
          <MDXRenderer>{node.body}</MDXRenderer>
        </article>
      ))}
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
        id
        body
      }
    }
  }
`;

export default BlogPage;

import * as React from 'react';
import { PageProps, graphql, Link } from 'gatsby';

import Layout from '../../components/layout';

type BlogNode = {
  frontmatter: {
    title: string;
    date: string;
  };
  id: string;
  slug: string;
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
          <h2>
            <Link to={`/blog/${node.slug}`}>{node.frontmatter.title}</Link>
          </h2>
          <p>Posted: {node.frontmatter.date}</p>
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
        slug
      }
    }
  }
`;

export default BlogPage;

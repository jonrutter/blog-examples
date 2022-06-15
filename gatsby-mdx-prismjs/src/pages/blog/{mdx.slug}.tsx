import * as React from 'react';
import { PageProps, graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import {
  GatsbyImage,
  getImage,
  IGatsbyImageData,
  ImageDataLike,
} from 'gatsby-plugin-image';

import Layout from '../../components/layout';

type DataProps = {
  mdx: {
    frontmatter: {
      title: string;
      date: string;
      hero_image_alt: string | null;
      hero_image_caption: string | null;
      hero_image_credit_link: string | null;
      hero_image_credit_text: string | null;
      hero_image: ImageDataLike;
    };
    body: string;
  };
};

const BlogPost = ({ data }: PageProps<DataProps>) => {
  const image = getImage(data.mdx.frontmatter.hero_image);
  const imageCaption = data.mdx.frontmatter.hero_image_caption;
  const imageAlt = data.mdx.frontmatter.hero_image_alt;
  const imageCredit = data.mdx.frontmatter.hero_image_credit_text;
  const imageLink = data.mdx.frontmatter.hero_image_credit_link;
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <p>{data.mdx.frontmatter.date}</p>
      {image && (
        <>
          <GatsbyImage
            image={image}
            alt={data.mdx.frontmatter.hero_image_alt || ''}
          />
          <p>
            {imageCaption && `${imageCaption} • `}
            {imageCredit && imageLink ? (
              <>
                Photo credit: <a href={imageLink}>{imageCredit}</a>
              </>
            ) : null}
          </p>
        </>
      )}
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
    </Layout>
  );
};
export default BlogPost;

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        hero_image_alt
        hero_image_caption
        hero_image_credit_link
        hero_image_credit_text
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      body
    }
  }
`;

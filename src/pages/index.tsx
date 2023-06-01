import React from "react"
import { graphql, PageProps } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Bio from "../components/bio"

function SiteIndex({ data, location }: PageProps<Queries.Query>) {
  const siteTitle = data.site?.siteMetadata?.title ?? "Title"

  return (
    <Layout location={location} title={siteTitle}>
      <Bio />
    </Layout>
  )
}

export default SiteIndex

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export function Head() {
  return <Seo title="About T" />
}

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`

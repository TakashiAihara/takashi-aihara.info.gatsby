import React from "react"
import { graphql, PageProps } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

function NotFoundPage({ data, location }: PageProps<Queries.Query>) {
  const siteTitle = data.site?.siteMetadata?.title ?? ""

  return (
    <Layout location={location} title={siteTitle}>
      <h1>404: Not Found</h1>
    </Layout>
  )
}

export function Head() {
  return <Seo title="404: Not Found" />
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

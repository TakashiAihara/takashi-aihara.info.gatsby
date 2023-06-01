import { Link, graphql, useStaticQuery } from "gatsby"
import React from "react"

function SiteTitle() {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            social {
              twitter
            }
          }
        }
      }
    `
  )

  const title = site?.siteMetadata?.title ?? ""

  return (
    <h1 className="main-heading">
      <Link to="/">{title}</Link>
    </h1>
  )
}

export default SiteTitle

import React from "react"
import { Link, graphql } from "gatsby"
import { RichText } from "prismic-reactjs"

import Layout from "../components/layout"
import SEO from "../components/seo"

export const query = graphql`
  query WowPageQuery {
    site {
      siteMetadata {
        title
        author
      }
    }
    prismic {
      content: allContents(uid: "wow") {
        edges {
          node {
            text
            headline
          }
        }
      }
    }
  }
`

const WowPage = ({ data }) => {
  const doc = data.prismic.content.edges.slice(0, 1).pop()

  return (
    <Layout>
      <SEO title="Wow" />
      {RichText.render(doc.node.headline)}
      {RichText.render(doc.node.text)}
      <p>Author: {data.site.siteMetadata.author}</p>
      <Link to="/">Go to home</Link> <br />
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </Layout>
  )
}

export default WowPage

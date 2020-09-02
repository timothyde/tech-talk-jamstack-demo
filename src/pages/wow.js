import React from "react"
import { Link, graphql } from "gatsby"

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
    pkmn: allPokemon {
      nodes {
        name
      }
    }
  }
`

const WowPage = ({ data }) => (
  <Layout>
    <SEO title="Wow" />
    <h1>Wowowow</h1>
    <h2>My favorite Pokémon!!!:</h2>
    <ul>
      {data.pkmn.nodes.map(({ name }) => (
        <li>{name}</li>
      ))}
    </ul>
    <p>Author: {data.site.siteMetadata.author}</p>
    <Link to="/">Go to home</Link> <br />
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default WowPage

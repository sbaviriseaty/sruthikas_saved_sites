import React from "react"
import { graphql } from "gatsby"
import Container from "../components/container"

const IndexPage = ({ data }) => {
  return (
    <Container>
      <h1>🔗 sruthika's saved sites...</h1>
      <h3><a href = "/contact">💡 recommend me a site!</a></h3>
      <a href="https://tilearned.netlify.app/"><h5>🙏 inspired by Kat Huang's tilearned</h5></a>
      {data.allRestApi22A5E6Fbc0E664513D2387476A221277BookmarksDirectory.nodes[0].directory.map((directory) => {
        return (
          <article>
            <h7>✓ {directory.id - 1} </h7>
            <a href= {directory.link} >{directory.title }</a>
          </article>
        )
    })}     
    </Container>
  )
}

export const query = graphql`
query MyQuery {
  allRestApi22A5E6Fbc0E664513D2387476A221277BookmarksDirectory {
    nodes {
      directory {
        id
        link
        title
      }
    }
  }
}
`

export default IndexPage

import React from "react"
import { graphql } from "gatsby"

const IndexPage = ({ data }) => {
  return (
    <div>
      <h1>sruthika's saved sites...</h1>
      {data.allRestApi22A5E6Fbc0E664513D2387476A221277BookmarksDirectory.nodes[0].directory.map((directory) => {
        return (
          <article>
            <h7>{directory.id}: </h7>
            <a href= {directory.link} >{directory.title }</a>
          </article>
        )
    })}     
    </div>
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

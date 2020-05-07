import React from "react"
import { graphql } from "gatsby"

const IndexPage = ({ data }) => {
  return (
    <div>
      <h1>sruthika's saved sites...</h1>
<<<<<<< HEAD
      <h4><a href = "/contact">recommend me a site!</a></h4>
=======
>>>>>>> 4e6185559e68fee3aea37f6d0e483cfd7b9118c6
      {data.allRestApi22A5E6Fbc0E664513D2387476A221277BookmarksDirectory.nodes[0].directory.map((directory) => {
        return (
          <article>
            <h7>{directory.id - 1}: </h7>
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

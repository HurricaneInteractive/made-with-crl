import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import LibraryCard from "../components/LibraryCard"

const IndexPage = ({ data }) => {
  const { edges: libraries } = data.allMdx
  return (
    <Layout>
      <SEO title="Home" />
      <div className="md:flex">
        <div class="w-full">
          <div class="md:flex -mx-2">
            {
              libraries && libraries.map(({ node: library }) => (
                <LibraryCard slug={library.fields.slug} {...library.frontmatter} key={library.id} />
              ))
            }
            {
              !libraries && (
                <span className="uppercase text-xs font-bold mb-3 text-gray-700">No libraries found...</span>
              )
            }
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query IndexPageQuery {
    allMdx {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            demo
            description
            github
            title
            npm
          }
        }
      }
    }
  }
`

export default IndexPage

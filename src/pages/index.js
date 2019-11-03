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
        <div className="w-full">
          <div className="md:flex flex-wrap -mx-2">
            <div className="px-2 w-full mb-10">
              <div className="md:w-1/3">
                <h2 className="text-2xl mb-3 font-semibold">Welcome to Made with CRL</h2>
                <p className="text-gray-300">The goal of this project is to highlight libraries created with <a className="underline" href="https://github.com/transitive-bullshit/create-react-library" target="_blank" rel="noopener noreferrer">create-react-library</a>. If you've create a library, feel free to submit a PR on this project.</p>
                <p className="text-sm text-gray-600">PSST... <span>top corner</span></p>
              </div>
            </div>
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

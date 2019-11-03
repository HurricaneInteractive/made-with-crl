import React from "react"
import { graphql, Link } from "gatsby"
// import { MDXRenderer } from "gatsby-plugin-mdx"
import { ChevronLeft, Copy } from "react-feather"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {CopyToClipboard} from 'react-copy-to-clipboard';

const installText = (name, type = "npm") => (
  type === "npm" ?
    `npm i ${name} --save` :
    `yarn add ${name}`
)

export const PageTemplate = ({ data: { mdx } }) => {
  const { title, description, tags, install, npm, demo, github } = mdx.frontmatter
  const installMethods = ['npm', 'yarn']

  return (
    <Layout>
      <SEO />
      <div className="mx-auto w-full md:w-3/5">
        <div className="mb-5 pb-3 border-b border-gray-800 text-gray-500">
          <Link to="/" className="inline-flex"><ChevronLeft /> Back to home</Link>
        </div>
        <h1 className="font-bold text-3xl mb-5">{title}</h1>
        {
          tags && (
            <div className="flex my-5">
              { tags.map((tag, i) => (
                <span key={i} className="pill mr-1 mb-1 uppercase text-xs">{tag}</span>
              )) }
            </div>
          )
        }
        {
          description && (
            <p className="py-4 pl-6 border-l-4 border-purple-500 bg-gray-800">{description}</p>
          )
        }
        {
          install && (
            <div className="my-5">
              <h3 className="text-xl">Install Package</h3>
              {
                npm ? (
                  <p className="mb-5 text-xs text-gray-700">
                    View on <a href={npm} target="_blank" rel="noopener noreferrer" className="underline text-purple-500">npm</a>
                  </p>
                ) : (
                  <div className="mb-5" />
                )
              }
              <div className="md:flex">
                <div className="w-full">
                  <div className="md:flex -mx-2">
                    {
                      installMethods.map((method) => (
                        <div className="w-full md:w-1/2 px-2 mb-1" key={method}>
                          <div className="flex bg-gray-800 px-4 p-3">
                            <p className="flex-grow">{ installText(install, method) }</p>
                            <CopyToClipboard text={ installText(install, method) }>
                              <a href="#" onClick={(e) => { e.preventDefault() }}>
                                <Copy />
                              </a>
                            </CopyToClipboard>
                          </div>
                        </div>
                      ))
                    }
                  </div>
                </div>
              </div>
            </div>
          )
        }
        {
          (demo || github) && (
            <div className="my-5">
              <h3 className="text-xl mb-3">Other links</h3>
              <ul className="text-purple-500">
                {
                  github && <li><a href={github} target="_blank" rel="noopener noreferrer">Github repo</a></li>
                }
                {
                  demo && <li><a href={demo} target="_blank" rel="noopener noreferrer">View demo</a></li>
                }
              </ul>
            </div>
          )
        }
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query LibraryPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        description
        tags
        install
        npm
        demo
        github
      }
    }
  }
`

export default PageTemplate

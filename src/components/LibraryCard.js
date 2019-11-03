import React from "react"
import { Link } from "gatsby"
import { GitHub, Globe, Download, Eye } from "react-feather"

const LibraryCard = ({ slug, title, description, demo, github, npm }) => (
  <div className="w-full md:w-1/2 lg:w-1/4 px-2 mb-5">
    <div className="h-full p-6 pb-16 rounded bg-gray-800 relative">
      <h3 className="font-bold text-lg mb-5">{title}</h3>
      {description && (
        <p className="text-gray-300 card-content">{description}</p>
      )}
      {(demo || github) && (
        <div className="absolute px-6 left-0 bottom-0 pb-5 w-full flex flex-row text-purple-500">
          <div className="flex flex-grow">
            {demo && (
              <a
                href={demo}
                className="mr-3"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Globe />
              </a>
            )}
            {github && (
              <a
                href={github}
                className="mr-3"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHub />
              </a>
            )}
            {npm && (
              <a
                href={npm}
                className="mr-3"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download />
              </a>
            )}
          </div>
          <div>
            <Link to={`${slug}`}>
              <Eye />
            </Link>
          </div>
        </div>
      )}
    </div>
  </div>
)

export default LibraryCard

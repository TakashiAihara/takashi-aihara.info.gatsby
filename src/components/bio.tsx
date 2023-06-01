import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { AiFillTwitterCircle } from "@react-icons/all-files/ai/AiFillTwitterCircle"
import { AiFillGithub } from "@react-icons/all-files/ai/AiFillGithub"
import { StaticImage } from "gatsby-plugin-image"

function Bio() {
  const { site } = useStaticQuery<Queries.Query>(
    graphql`
      query SocialButtons {
        site {
          siteMetadata {
            social {
              twitter
              github
            }
          }
        }
      }
    `
  )

  const { social } = site?.siteMetadata ?? {}
  const { twitter } = social ?? {}
  const { github } = social ?? {}

  return (
    <div className="grid grid-cols-4 gap-2">
      <div className="col-span-1 flex flex-col">
        <StaticImage
          formats={["auto", "webp", "avif"]}
          src="../images/2021.jpg"
          placeholder="none"
          quality={80}
          className="rounded-full border-gray-400"
          alt="T photo"
        />
        <h4 className="text-sm text-gray-500 text-center">
          a.k.a TakashiAihara
        </h4>
        <div className="row-span-1 flex justify-around">
          <div className="grid-cols-1">
            <Link to={`https://twitter.com/${twitter}`}>
              <AiFillTwitterCircle size={35} color="#1DA1F2" title="Twitter" />
            </Link>
          </div>
          <div className="grid-cols-1">
            <Link to={`https://github.com/${github}`}>
              <AiFillGithub size={35} color="#333" title="Github" />
            </Link>
          </div>
        </div>
      </div>
      <div className="col-span-3 grid-rows-4">
        <div className="row-span-1">
          <p className="text-lg text-gray-700">- Japanese (in Okayama)</p>
        </div>
        <div className="row-span-1">
          <p className="text-lg text-gray-700">- IT Infrastructure Engineer</p>
        </div>
        <div className="row-span-1">
          <p className="text-lg text-gray-700">
            - Lead Web Developer (frontend/backend)
          </p>
        </div>
        <div className="row-span-1">
          <p className="text-lg text-gray-700">- B-boying(Breakin&apos;) </p>
        </div>
        <div className="row-span-1">
          <p className="text-lg text-gray-700">- HipHop</p>
        </div>
      </div>
    </div>
  )
}

export default Bio

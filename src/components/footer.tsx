import React from "react"

function Footer() {
  return (
    <footer className="text-center">
      <div>
        <span className="text-sm">
          © {new Date().getFullYear()}, Built with{" "}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </span>
      </div>
      <div>
        <span className="text-sm">
          Also, the source code of this site is in this{" "}
          <a
            href="https://github.com/TakashiAihara/takashi-aihara.info"
            className="underline font-bold"
          >
            Repository.
          </a>
        </span>
      </div>
    </footer>
  )
}

export default Footer

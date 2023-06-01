import { WindowLocation } from "@reach/router"
import React from "react"
import Header from "./header"
import Footer from "./footer"

type Props = Readonly<{
  location: WindowLocation
  title: string
  children?: React.ReactNode
}>

function Layout({ location, children }: Props) {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout

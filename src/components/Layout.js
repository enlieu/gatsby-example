import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import "./Layout.css"

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </React.Fragment>
  )
}

export default Layout

import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import "bootstrap/dist/css/bootstrap.min.css"
import "./layout.css"
import "bootstrap/dist/js/bootstrap.js";


export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}
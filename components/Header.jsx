import React from "react"
import { Link, NavLink } from "react-router-dom"
import imageUrl from "/assets/images/avatar-icon.png"
import Menu from "../pages/Menu"

export default function Header() {
  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  }

  function fakeLogOut() {
    localStorage.removeItem("loggedin")
  }

  return (
    <header>
      <Link className="site-logo" to="/">
        #VanLife
      </Link>

      <Menu />
    </header>
  )
}

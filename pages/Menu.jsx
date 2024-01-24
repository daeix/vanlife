import React from "react"
import { NavLink } from "react-router-dom"
import { AiOutlineCloseSquare } from "react-icons/ai"

import { BsJustify } from "react-icons/bs"

export default function Menu() {
  const [isHidden, setIsHidden] = React.useState(true)

  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  }

  function openMenu() {
    setIsHidden((prevV) => !prevV)
  }

  if (!isHidden) {
    return (
      <div className="menu">
        <div className="close-menu">
          <h4>Menu</h4>
          <AiOutlineCloseSquare onClick={openMenu} />
        </div>

        <NavLink
          className="menu-link"
          to="/host"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Host
        </NavLink>
        <NavLink
          className="menu-link"
          to="/about"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          About
        </NavLink>
        <NavLink
          className="menu-link"
          to="/vans"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Vans
        </NavLink>
        <NavLink
          className="menu-link"
          to="/login"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Sign in
        </NavLink>
      </div>
    )
  } else {
    return <BsJustify onClick={openMenu} className="menu-icon" />
  }
}

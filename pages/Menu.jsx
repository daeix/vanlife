import React from "react"
import { NavLink } from "react-router-dom"
import { AiOutlineCloseSquare } from "react-icons/ai"
import { BsBoxArrowInRight, BsCaretRight, BsList } from "react-icons/bs"

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
          <h4 className="menu-text">Menu</h4>

          <AiOutlineCloseSquare className="closure-square" onClick={openMenu} />
        </div>
        <div className="menu-divider"></div>
        <div className="sign-in">
          <NavLink
            className="menu-link"
            to="/host"
            style={({ isActive }) => (isActive ? activeStyles : null)}
          >
            Host
          </NavLink>
          <BsCaretRight />
        </div>

        <div className="menu-divider"></div>
        <div className="sign-in">
          <NavLink
            className="menu-link"
            to="/about"
            style={({ isActive }) => (isActive ? activeStyles : null)}
          >
            About
          </NavLink>
          <BsCaretRight />
        </div>

        <div className="menu-divider"></div>
        <div className="sign-in">
          <NavLink
            className="menu-link"
            to="/vans"
            style={({ isActive }) => (isActive ? activeStyles : null)}
          >
            Vans
          </NavLink>
          <BsCaretRight />
        </div>

        <div className="menu-divider"></div>
        <div className="sign-in">
          <NavLink
            className="menu-link"
            to="/login"
            style={({ isActive }) => (isActive ? activeStyles : null)}
          >
            Sign in
          </NavLink>
          <BsBoxArrowInRight className="sign-arrow" />
        </div>

        <div className="menu-divider"></div>
      </div>
    )
  } else {
    return <BsList onClick={openMenu} className="menu-icon" />
  }
}

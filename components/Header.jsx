import React from "react"
import { Link } from "react-router-dom"
import Menu from "../pages/Menu"
import MenuDesktop from "../pages/MenuDesktop"

export default function Header() {
  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  }

  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth)

  React.useEffect(() => {
    window.addEventListener("resize", function () {
      setWindowWidth(window.innerWidth)
    })
  }, [])

  return (
    <header>
      <Link className="site-logo" to="/">
        #VanLife
      </Link>
      {windowWidth > 601 ? <MenuDesktop /> : <Menu />}
    </header>
  )
}

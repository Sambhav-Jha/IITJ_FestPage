import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/home" className="site-title">
        IITJ Fest Website
      </Link>
      <ul>
        <CustomLink className="link" to="/home" id = "hm">Home</CustomLink>
        <CustomLink className="link" to="/fests" id = "f">Fests</CustomLink>
        <CustomLink className="link" to="/pronite" id = "pr">Pronite</CustomLink>
        <CustomLink className="link" to="/about" id = "ab">About</CustomLink>
      </ul>
    </nav>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}
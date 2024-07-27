import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        IITJ Fest Website
      </Link>
      <ul>
        <CustomLink className="link" to="/home">Home</CustomLink>
        <CustomLink className="link" to="/fests">Fests</CustomLink>
        <CustomLink className="link" to="/pronite">Pronite</CustomLink>
        <CustomLink className="link" to="/about">About</CustomLink>
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
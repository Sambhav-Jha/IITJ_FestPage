import { Link, useMatch, useResolvedPath } from "react-router-dom"
import IITJ_logo from "../assets/IITJ_logo.png"

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/home" className="site-title">
        <img src={IITJ_logo} alt="IITJ-LOGO" style={{width: '50px', borderRadius: '10%'}}></img> 
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
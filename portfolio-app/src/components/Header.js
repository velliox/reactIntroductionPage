import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { useState } from "react";

import "./../styles.css";

const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <nav className="nav">
      <Link className="site-title" to="/">
        Andrei Sebastian
      </Link>
      <ul className="menu-icon" onClick={handleClick}>
        <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
      </ul>

      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <CustomLink to="/" className="nav-links" onClick={closeMobileMenu}>
          Home
        </CustomLink>
        <CustomLink to="/about" className="nav-links" onClick={closeMobileMenu}>
          About
        </CustomLink>
        <CustomLink
          to="/projects"
          className="nav-links"
          onClick={closeMobileMenu}
        >
          Projects
        </CustomLink>
        <CustomLink
          to="/contact"
          className="nav-links"
          onClick={closeMobileMenu}
        >
          Contact
        </CustomLink>
      </ul>
    </nav>
  );
};

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}

export default Header;

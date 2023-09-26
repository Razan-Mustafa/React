import { Outlet, NavLink } from "react-router-dom";
import '../App.css';

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to="/" className="link" activeClassName="active">Home</NavLink>
          </li>
          <li>
            <NavLink to="/blogs" className="link"activeClassName="active">Articale</NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="link" activeClassName="active">Contact</NavLink>
          </li>
          <li>
            <NavLink to="/login" className="link" activeClassName="active">Login</NavLink>
          </li>
          <li>
            <NavLink to="/register" className="link" activeClassName="active">Register</NavLink>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;

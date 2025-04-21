import { NavLink } from 'react-router-dom';

const Header = () => (
  <header className="bg-dark text-light  py-3">
    <nav className="container">
      <div>
        <h1 className="display-4">Ecommerce Website</h1>
      </div>
      <ul className="nav">
        <li className="nav-item">
          <NavLink className="nav-link" to="/">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/products">
            Products
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about">
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;

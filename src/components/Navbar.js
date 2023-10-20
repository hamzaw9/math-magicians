import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <Link className="logo" to="/">
      Math Magicians
    </Link>

    <ul className="nav-links">
      <li>
        <Link className="nav-link" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="nav-link" to="/calculator">
          Calculator
        </Link>
      </li>
      <li>
        <Link className="nav-link" to="/quote">
          Quote
        </Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;

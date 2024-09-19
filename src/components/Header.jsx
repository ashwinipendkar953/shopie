import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-dark text-white">
      <nav>
        <div className="container">
          <h1 className="display-4 py-4 fw-normal">Shopie</h1>
          <ul className="nav">
            <li className="nva-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nva-item">
              <Link className="nav-link" to="/products">
                Products
              </Link>
            </li>
            <li className="nva-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;

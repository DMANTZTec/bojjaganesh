import Cookie from "js-cookie";
import { Link, withRouter } from "react-router-dom";

import "./index.css";

const Header = (props) => {
  const onLogout = () => {
    const { history } = props;
    Cookie.remove("jwt_token");
    history.replace("/login");
  };
  return (
    <nav className="nav-container">
      <div className="nav-elements-container">
        <Link to="/" className="app-link">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
            className="app-logo"
          />
        </Link>
        <ul className="nav-items">
          <li>
            <Link to="/" className="nav-item">
              Home
            </Link>
          </li>
          <li>
            <Link to="/products" className="nav-item">
              Products
            </Link>
          </li>
          <li>
            <Link to="/cart" className="nav-item">
              Cart
            </Link>
          </li>
          <li>
            <button
              className="logout-btn-desktop"
              type="button"
              onClick={onLogout}
            >
              Logout
            </button>
          </li>
        </ul>
        <button className="logout-btn-mobile" type="button" onClick={onLogout}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
            alt="nav logout"
            className="logout-image"
          />
        </button>
      </div>
      <div className="nav-container-mobile">
        <ul className="nav-items-mobile">
          <li>
            <Link to="/">
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
                className="nav-item-mobile"
                alt="nav home"
              />
            </Link>
          </li>
          <li>
            <Link to="/products">
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
                className="nav-item-mobile"
                alt="nav products"
              />
            </Link>
          </li>
          <li>
            <Link to="/cart">
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
                className="nav-item-mobile"
                alt="nav cart"
              />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default withRouter(Header);

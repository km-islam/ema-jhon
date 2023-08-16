import { Link } from "react-router-dom";
import logo from "../../assets/images/Logo.svg";
import "./header.css";
import { BsCart4 } from "react-icons/bs";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="header-wrap">
          <div className="site-logo">
            <Link to={`/`}>
              <img src={logo} alt="" />
            </Link>
          </div>
          <nav className="nav">
            <ul>
              <li>
                <Link to="/shop">Shop</Link>
              </li>
              <li>
                <Link to="/order">Order</Link>
              </li>
              <li>
                <Link to="/inventory">Manage inventory</Link>
              </li>
            </ul>
          </nav>

          <form className="search-form">
            <input type="search" placeholder="Search here" />
            <button>Search</button>
          </form>
          <div className="cart">
            <BsCart4 />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

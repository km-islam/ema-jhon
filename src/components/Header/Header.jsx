import logo from "../../assets/images/Logo.svg";
import "./header.css";
import { BsCart4 } from "react-icons/bs";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="header-wrap">
          <div className="site-logo">
            <img src={logo} alt="" />
          </div>
          <nav className="nav">
            <ul>
              <li>
                <a href="/shop">Shop</a>
              </li>
              <li>
                <a href="/review">Oreder Review</a>
              </li>
              <li>
                <a href="/manage">Manage inventory</a>
              </li>
            </ul>
          </nav>

          <form className="search-form">
            <input type="search" placeholder="Search here"/>
            <button>Search</button>
          </form>
          <div className="cart">
             <BsCart4/>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

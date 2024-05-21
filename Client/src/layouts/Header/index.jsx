import { NavLink } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { PiShoppingCartBold } from "react-icons/pi";

import "./index.scss";

const Header = () => {
  return (

    <div>

          <header>
      {/* <div className="contanier"> */}
        <div className="header">
          <img
            src="https://preview.colorlib.com/theme/aranoz/img/logo.png"
            alt="logo"
            className="logo"
          />
          <nav>
            <ul>
              <li>
                <NavLink style={{ marginRight: "15px" }}>Home</NavLink>
                <NavLink style={{ marginRight: "15px" }}>Shop</NavLink>
                <NavLink style={{ marginRight: "15px" }}>Pages</NavLink>
                <NavLink style={{ marginRight: "15px" }}>Blog</NavLink>
                <NavLink style={{ marginRight: "15px" }}>Contact</NavLink>
              </li>
            </ul>
          </nav>
          <div className="icon">
            <FaRegUser />
            <FaRegHeart />
            <PiShoppingCartBold />
          </div>
        </div>
      {/* </div> */}
    </header>
    </div>



  );
};



export default Header;

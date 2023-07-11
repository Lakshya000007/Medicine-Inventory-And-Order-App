import "./Header.css";
import { BsFillCartPlusFill } from "react-icons/bs";

const Header = ({ handleCartShow, cartCnt }) => {
  const handleCartShowClick = () => {
    handleCartShow();
  };

  return (
    <>
      <header className="header-top">
        <h3 style={{ color: "white", margin: "auto" }}>Medicine Inventory</h3>
        <button className="cart" onClick={handleCartShowClick}>
          <BsFillCartPlusFill />
          <div>
            <b>Your Cart</b>
          </div>
          <div className="itemCount" style={{ color: "violet" }}>
            {cartCnt}
          </div>
        </button>
      </header>
    </>
  );
};

export default Header;

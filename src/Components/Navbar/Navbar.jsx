import { useState } from "react";
import "./navbar.css";
function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav>
        <div className="left">
          <a href="/" className="logo">
            <img src="https://clipground.com/images/logos-png-8.png" />
            <span>PatelEstate</span>
          </a>
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Contact</a>
          <a href="/">Agents</a>
        </div>
        <div className="right">
          <a href="/">Sign in</a>
          <a href="/" className="register">
            Sign up
          </a>
          <div className="menuIcon">
            <img
              // src="https://cdn0.iconfinder.com/data/icons/rounded-basics/24/rounded__menu-512.png"
              src="https://github.com/safak/react-estate-ui/blob/starter/public/menu.png?raw=true"
              alt="menu"
              onClick={() => {
                setOpen((prev) => !prev);
              }}
            />
          </div>
          <div className={open ? "menu active" : "menu"}>
            <a href="/">Home</a>
            <a href="/">About</a>
            <a href="/">Contact</a>
            <a href="/">Agents</a>
            <a href="/">Sign in</a>
            <a href="/">Sign up</a>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Navbar;

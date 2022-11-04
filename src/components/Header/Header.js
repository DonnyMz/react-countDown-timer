import { Link } from "react-router-dom";
import Logo from "../../images/logo.png";
import "./header.css";

const Header = () => {
  return (
    <>
      <header className="App-header">
        <span className="logo">
          <img src={Logo} alt="jojocode logo " />
        </span>
        <nav className="navigation">
          <ul className="links">
            <li className="link">
              <Link to="/">Home</Link>
            </li>
            <li className="link">
              <Link to="about">About</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;

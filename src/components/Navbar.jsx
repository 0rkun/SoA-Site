import "../styles/Navbar.css";
import { Link } from "react-router-dom";
import SoaLogo from "../assets/reaper-4.png";

function Navbar() {
  return (
    <div className="navbar">
      <div className="main">
        <img src={SoaLogo} alt="soalogo" />
        <div className="mainlink">
          <Link to="/">Anasayfa</Link>
          <Link to="/members">Üyeler</Link>
          <Link to="/history">Tarihçe</Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

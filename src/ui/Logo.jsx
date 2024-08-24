import { Link } from "react-router-dom";
import LogoImg from "/logo.jpg";

function Logo() {
  return (
    <Link to="/home">
      <img src={LogoImg} alt="Logo" className="h-20 rounded-full" />
    </Link>
  );
}

export default Logo;

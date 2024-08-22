import { Link, Outlet } from "react-router-dom";
import "./header.css";
const Header = () => {
  return (
    <>
      <header>
        <Link to="/">
          <img className="logo" src="imgs/logo-pokemon.png" alt="Pokemon" />
        </Link>
        <img className="gif" src="imgs/Pokebola-0001.gif" alt="Pokemon gif" />
      </header>
      <Outlet />
    </>
  );
};

export default Header;

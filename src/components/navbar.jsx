import "../styles/navbar.css";
import logo from "../assets/logonotext.svg";
import item from "../data/menu";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const location = useLocation();
  let initState = '';
 if (location.pathname === '/') {
  initState = item[0].name;
 } else if (location.pathname === '/skills') {
  initState = item[1].name;
 } else if (location.pathname === '/portfolio') {
  initState = item[2].name;
 } else {initState = item[3].name}

  const [activeLink, setActiveLink] = useState(initState);

  console.log(location);
  const handleClick = (e) => {
    const name = e.target.textContent;
    setActiveLink(name);
  };

  return (
    <>
      <nav>
        <img src={logo} alt='' />
        <div className='menu'>
          <ul>
            <li>
              <Link
                className={
                  activeLink === item[0].name ? "menu-link active" : "menu-link"
                }
                to='/'
                onClick={handleClick}>
                {item[0].name}
              </Link>
            </li>
            <li>
              <Link
                className={
                  activeLink === item[1].name ? "menu-link active" : "menu-link"
                }
                to='/skills'
                onClick={handleClick}>
                {item[1].name}
              </Link>
            </li>
            <li>
              <Link
                className={
                  activeLink === item[2].name ? "menu-link active" : "menu-link"
                }
                to='/portfolio'
                onClick={handleClick}>
                {item[2].name}
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

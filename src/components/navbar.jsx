import "./navbar.css";
import logo from "../assets/logotext.svg";;
import item from "../data/menu";
import { Link } from "react-router-dom";


function Dupa() {
  console.log('dupa')
}

function Navbar() {


  return (
    <>
      <nav>
          <img src={logo} alt="" />
          <div className='menu'>
            <ul>
              <li><Link to="/">{item[0].name}</Link></li>
              <li><Link to="/skills">{item[1].name}</Link></li>
              <li><Link to="/portfolio">{item[2].name}</Link></li>
              <li><Link to="/contact">{item[3].name}</Link></li>
            </ul>
            
            </div>
      </nav>
    </>
  );
}

export default Navbar;

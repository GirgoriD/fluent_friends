import "./menu.scss";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="menu">
        <Link to="/">
          <span>Home</span>
        </Link>
        <span>sadasd</span>
        <span>About</span>
        <Link to="/contact">
          <span>Contacts</span>
        </Link>
    </div>
  )
}

export default Menu
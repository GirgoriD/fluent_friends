import "./header.scss";
import logo from '../../assets/images/logo.png';
import Menu from "../menu/Menu";
import { Link } from "react-router-dom";

const Header = () => {
    return(
        <div className="header">
            <Link to ="/">
                <img src={logo} alt="logo" />
            </Link>
            <Menu />
        </div>
    )
}

export default Header;
import "./header.scss";
import logo from '../../assets/images/logo.png';
import Menu from "../menu/Menu";

const Header = () => {
    return(
        <div className="header">
            <img src={logo} alt="logo" />
            <Menu />
        </div>
    )
}

export default Header;
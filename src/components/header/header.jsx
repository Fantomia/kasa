import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png';

const Header = () => {
    return (
        <div className='Header'>
            <img src={logo} className="home__logo" alt="logo" />
            <nav>
                <NavLink to="/" end>Accueil</NavLink>
                <NavLink to="/About">A Propos</NavLink>
            </nav>
        </div>
    );
}

export default Header;

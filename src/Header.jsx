import NavBar from './NavBar';
import Logo from './assets/image/logo.jpg';
import './Header.css';

function Header({ setPage }) {
    
    return (
        <header className="header"> 
            <a className="skip-to-content-link" href="#main">Skip to content</a>
            <img
                src={Logo}
                className="header__logo"
                alt="This website logo depicts a figurine of a cat with a human-like body dressed in an astronaut suit. "
            />
            <h1 className="header__title">
                Pet Conect
            </h1>
            <NavBar setPage={setPage}/>
    
        </header>
    );
}

export default Header; 
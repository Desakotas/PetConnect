import './NavBar.css';
import Button from './Button';
import { useState } from 'react';

function NavBar({ setPage }) {

    const [isopened,setIsOpened] = useState(false);
    const openState = isopened ? "open" : "";

    function go(event, page) {
        event.preventDefault();
        setPage(page);
        setIsOpened(false); 
    }

    return (
        <nav className="navbar">
            <Button className="nav__button" type="button" ariaLabel="Open menu" onClick={() => setIsOpened(!isopened)}>{"\u2630"}</Button> 
            
            <ul className={`menu ${openState}`}>
                    <li className="menu__item">
                        <Button className="menu__button" type="button" onClick={ (e) => go(e, "Home")}>Home</Button>
                    </li>
                    <li className="menu__item">
                        <Button className="menu__button" type="button">Adoption</Button> 
                        <ul className="submenu">
                            <li className="submenu__item">
                                <a className="submenu__link" href="/about" onClick={(e) => go(e, "About")}>
                                    About us
                                </a>
                            </li>
                            <li className="submenu__item">
                                <a className="submenu__link" href="/breeds" onClick={ (e) => go(e, "Breeds") }>
                                    Breeds
                                </a>
                            </li>
                        </ul>
                    </li>

                    <li className="menu__item">
                        <Button className="menu__button" type="button">Others</Button> 
                        <ul className="submenu">
                            <li className="submenu__item">
                                <a className="submenu__link" href="/register" onClick={ (e) => go(e, "Register") }>
                                    Register
                                </a>
                            </li>
                            <li className="submenu__item">
                                <a className="submenu__link" href="/subscribe" onClick={ (e) => go(e, "Subscribe") }>
                                    Subscribe
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
        </nav>
    );
}

export default NavBar;
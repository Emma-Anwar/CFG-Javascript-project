import React, {useEffect, useState} from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import './Navbar.css';
import {Button} from './Button';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true)

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth<=960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);



// Navbar contents

    return (
      <>
        <nav className='navbar'>
            <div className='navbar-container'>
                {/* Links here have been switched to href because we're using
                relative paths*/}
                <a href="/" className='navbar-logo' onClick={closeMobileMenu}>
                    CFG Tea <i className='fab fa-typo3' />
                </a>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='Nav-item'>
                        <a href ='/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </a>
                    </li>
                    <li className='Nav-item'>
                        <a href='/components/Pages/TeaPage/Tea' className='nav-links' onClick={closeMobileMenu}>
                            Tea Range
                        </a>
                    </li>
                    <li className='Nav-item'>
                        <Link to='/components/Pages/Product' className='nav-links' onClick={closeMobileMenu}>
                            Personalised Products
                        </Link>
                    </li>
                </ul>
                {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
            </div>
        </nav>
      </> 
    );
}

export default Navbar;
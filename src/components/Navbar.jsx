import React from 'react';
import SwitchColorMode from './SwitchColorMode';

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='navbar-left'>
                Navbar: 
            </div>
            <div className='navbar-right'>
                <SwitchColorMode />
            </div>
        </div>
    );
}

export default Navbar;
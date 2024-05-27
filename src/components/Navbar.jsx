import React from 'react';
import SwitchColorMode from './SwitchColorMode';

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='project-button project-button-details' title='Click for contact details.'>Contact</div>
            <div className='navbar-right'>
                <SwitchColorMode />
            </div>
        </div>
    );
}

export default Navbar;
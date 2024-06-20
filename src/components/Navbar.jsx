import React from 'react';
import { useNavigate } from 'react-router-dom';
import SwitchColorMode from './SwitchColorMode';

const Navbar = ( {handleRoute} ) => {
    const navigate = useNavigate();

    const onNavClick = (url, route) => { 
        navigate(url);
        handleRoute(route);
    };

    return (
        <div className='navbar'>
            <div 
                className='button button-details' 
                title='Back to start.'
                onClick={() => onNavClick('/', 'introduction')}
                >
                Start
            </div>
            
            <div 
                className='button button-details' 
                title='Show contact details.'
                onClick={() => onNavClick('/', 'projects')}
                >
                Projects
            </div>

            <div 
                className='button button-details' 
                title='Show contact details.'
                onClick={() => onNavClick('/', 'contact')}
                >
                Contact
            </div>
            <div className='navbar-right'>
                <SwitchColorMode />
            </div>
        </div>
    );
}

export default Navbar;
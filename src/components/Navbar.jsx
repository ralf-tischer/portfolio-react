import React from 'react';
import { useNavigate } from 'react-router-dom';
import SwitchColorMode from './SwitchColorMode';

const Navbar = () => {
    const navigate = useNavigate();

    const handleNavigateHome = () => {
        navigate(`/`);
    };
    
    return (
        <div className='navbar'>
            <div 
                className='project-button project-button-details' 
                onClick={handleNavigateHome}
                >
                    Home
            </div>
            <div 
                className='project-button project-button-details' 
                title='Click for contact details.'>
                    Contact
            </div>
            <div className='navbar-right'>
                <SwitchColorMode />
            </div>
        </div>
    );
}

export default Navbar;
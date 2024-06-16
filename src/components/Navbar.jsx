import React from 'react';
import { useNavigate } from 'react-router-dom';
import SwitchColorMode from './SwitchColorMode';

const Navbar = () => {
    const navigate = useNavigate();

    const handleNavigate = ( path ) => {
        navigate(path);
    };
    
    return (
        <div className='navbar'>
            <div 
                className='button button-details' 
                title='Show Introduction.'
                onClick={() => handleNavigate('/introduction/')}
                >
                Start
            </div>
            
            <div 
                className='button button-details' 
                title='Show contact details.'
                onClick={() => handleNavigate('/projects')}
                >
                Projects
            </div>

            <div 
                className='button button-details' 
                title='Show contact details.'
                onClick={() => handleNavigate('/contact/')}
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
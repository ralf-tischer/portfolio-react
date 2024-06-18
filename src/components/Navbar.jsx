import React from 'react';
import SwitchColorMode from './SwitchColorMode';

const Navbar = ( {handleRoute} ) => {

    return (
        <div className='navbar'>
            <div 
                className='button button-details' 
                title='Back to start.'
                onClick={() => handleRoute('introduction')}
                >
                Start
            </div>
            
            <div 
                className='button button-details' 
                title='Show contact details.'
                onClick={() => handleRoute('projects')}
                >
                Projects
            </div>

            <div 
                className='button button-details' 
                title='Show contact details.'
                onClick={() => handleRoute('contact')}
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
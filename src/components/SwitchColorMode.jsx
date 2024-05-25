import React, { useState, useEffect } from 'react';

const SwitchColorMode = ( { handleColorModeSwitch } 
                ) => {
    const [colorModeDark, setColorModeDark] = useState(false);

    useEffect(() => {
        document.body.style.backgroundColor = colorModeDark ? '#000' : '#fff';
        document.body.style.color = colorModeDark ? '#fff' : '#000';
    }, [colorModeDark]);
    
    const handleSliderChange = () => {
        setColorModeDark(!colorModeDark);
    };
    
    return (
        <div className='switch-box'>
            <div className='switch-label'>
                Dark mode
            </div>
            <label className='switch'>
                <input type='checkbox' onClick={handleSliderChange} />
                <span></span>
            </label>
        </div>
    );
}

export default SwitchColorMode;

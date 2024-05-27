import React, { useState } from 'react';

const SwitchColorMode = () => {
    const [colorModeDark, setColorModeDark] = useState(false);

    const handleSliderChange = () => {
        setColorModeDark(!colorModeDark);
        document.body.className = !colorModeDark ? 'dark-mode' : '';
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
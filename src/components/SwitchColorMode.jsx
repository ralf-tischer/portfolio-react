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
        <label className='switch'>
            <input type="checkbox" checked onClick={handleSliderChange}></input>
            <span className="slider"></span>
        </label>
    );
}

export default SwitchColorMode;
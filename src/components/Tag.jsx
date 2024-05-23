import React, { useState, useRef, useEffect } from 'react';
const { myTags } = require('../model/data.js');

const Tag = ( {    key, 
                   tagName: tagName } 
                ) => {

      const [showTooltip, setShowTooltip] = useState(false);
      const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
      const tagRef = useRef(null);

      const getTagProperties = (tag_short) => {
        const tagData = myTags.find(tag => tag.tag_short === tag_short);
        if (tagData) {
          return {
            tag_short: tag_short,
            tag_long: tagData.tag_long,
            color_text: tagData.color_text,
            color_bg: tagData.color_bg
          };
        } else {
          return null;
        }
      };

    const tagProps = getTagProperties(tagName);

    const tagStyle = {
      backgroundColor: `${tagProps.color_bg}`,
      color: `${tagProps.color_text}`,
    };

    useEffect(() => {
      const handleScroll = () => {
        if (tagRef.current) {
          updateTooltipPosition();
        }
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    const handleMouseEnter = (e) => {
      setShowTooltip(true);
      updateTooltipPosition(e);
    };
  
    const handleMouseLeave = () => {
      setShowTooltip(false);
    };
  
    const updateTooltipPosition = (e) => {
      if (tagRef.current) {
        const { left, top, width, height } = tagRef.current.getBoundingClientRect();
        const tooltipWidth = 200;
        const tooltipHeight = 50;
  
        let x = e.clientX + 10;
        let y = e.clientY + 10 - window.scrollY;
  
        if (x + tooltipWidth > window.innerWidth) {
          x = e.clientX - tooltipWidth - 10;
        }
        if (y + tooltipHeight > window.innerHeight) {
          y = e.clientY - tooltipHeight - 10 - window.scrollY;
        }
  
        setTooltipPosition({ x, y });
      }
    };
    
    return (
        <>
            <div 
              className='project-button'
              style= {tagStyle} 
              onMouseEnter={handleMouseEnter} 
              onMouseLeave={handleMouseLeave}
              onMouseMove={updateTooltipPosition}>
              {tagName}
            </div>
           {showTooltip && (
              <div
                className="tooltip"
                style={{
                  position: 'absolute',
                  backgroundColor: '#333',
                  color: '#fff',
                  padding: '8px',
                  borderRadius: '4px',
                  fontSize: '14px',
                  zIndex: '100',
                  left: `${tooltipPosition.x}px`,
                  top: `${tooltipPosition.y}px`,
                }}>
                {tagProps.tag_long}
              </div>
            )}
        </>
    );
}

export default Tag;

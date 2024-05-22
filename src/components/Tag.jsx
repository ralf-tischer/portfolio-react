/*import React, { useState } from 'react';
import { getTagProperties } from '../model/data.js';

const Tag = ({ 
                tagName }) => {

  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

  const handleMouseEnter = (e) => {
    setShowTooltip(true);
    setTooltipPosition({ x: e.clientX + 10, y: e.clientY + 10 });
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  const myTag = getTagProperties(tagName);

  return (
    <div
      className="tag"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        backgroundColor: `#${myTag.color_bg.toString(16)}`,
        color: `#${myTag.color_text.toString(16)}`,
        borderRadius: '20px',
        padding: '4px 8px',
        display: 'inline-block',
        marginRight: '8px',
        cursor: 'default',
      }}
    >
      {myTag.tag_short}
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
          }}
        >
          {myTag.tag_long}
        </div>
      )}
    </div>
  );
};

export default Tag;
*/

import React, { useState } from 'react';

const Tag = ( {    key, 
                   tagName: tagName } 
                ) => {
    return (
        <>
            <div>Tag: {tagName}</div>
        </>
    );
}

export default Tag;

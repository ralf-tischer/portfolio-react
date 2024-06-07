import React from 'react';
const { myTags } = require('../model/data.js');

const Tag = ( {    tagName,
                   clickable,
                   handleTagClick} 
                ) => {

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
          return {
            tag_short: "NOT FOUND",
            tag_long: "NOT FOUND",
            color_text: "red",
            color_bg: "#888"
          }
        }
      };

    const tagProps = getTagProperties(tagName);

    const tagStyle = {
      backgroundColor: `${tagProps.color_bg}`,
      color: `${tagProps.color_text}`,
    };

    const onTagClick = (tagName) => {
      if (clickable) {
        handleTagClick(tagName);
      }
    };

    return (
      <div 
        className='tag button'
        style={tagStyle} 
        onClick={() => onTagClick(tagName)}
        title={tagProps.tag_long + (clickable === true ? "\nClick to set filter." : "")}
        >
        {tagName}
      </div>
    );
}

export default Tag;

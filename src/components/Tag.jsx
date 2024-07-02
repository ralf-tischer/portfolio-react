import React from 'react';
const { myTags } = require('../model/data.js');

const Tag = ({ tagName,
  clickable,
  starred = false,
  handleTagClick }
) => {

  const getTagProperties = (tag_short) => {
    const tagData = myTags.find(tag => tag.tag_short === tag_short);
    if (tagData) {
      return {
        tag_short: tag_short,
        tag_long: tagData.tag_long,
        color_text: tagData.color_text,
        color_bg: tagData.color_bg,
        rating: tagData.myLevel
      };
    } else {
      return {
        tag_short: "NOT FOUND",
        tag_long: "NOT FOUND",
        color_text: "red",
        color_bg: "#888",
        rating: 0
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

  const stars = ( rating ) => {
    if (rating > 0) {
      return "★".repeat(rating);}
    else {
        return "";
    }
  }

  if (clickable) {
    return (
      <div
        className='tag button'
        style={tagStyle}
        onClick={() => onTagClick(tagName)}
        title={tagProps.tag_long + "\nClick to set filter."}
      >
        {tagName}
        {starred && <span className="star">{stars(tagProps.rating)}</span>}
      </div>
    );
  } else {
    return (
      <div
        className='tag button'
        style={tagStyle}
        title={tagProps.tag_long}
      >
        {tagName}
        {starred && <span className="star">{stars(tagProps.rating)}</span>}
      </div>
    );
  }
}

export default Tag;

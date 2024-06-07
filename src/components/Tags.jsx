import React from 'react';
import Tag from './Tag';

const Tags = ( {    tags,
                    clickable,
                    handleTagClick} 
                ) => {
    return (
        <div className='tag-container'> 
            { tags.map((tagName) => (
                <Tag 
                    tagName={tagName}
                    clickable={clickable}
                    handleTagClick={handleTagClick} />
            ))}
        </div>
    );
}

export default Tags;

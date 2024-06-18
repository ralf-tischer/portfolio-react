import React from 'react';
import Tag from './Tag';

const Tags = ( {    tags,
                    clickable,
                    starred,
                    handleTagClick} 
                ) => {
    return (
        <div className='tag-container'> 
            { tags.map((tagName) => (
                <Tag 
                    tagName={tagName}
                    clickable={clickable}
                    starred={starred}
                    handleTagClick={handleTagClick} />
            ))}
        </div>
    );
}

export default Tags;

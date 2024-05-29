import React from 'react';
import Tag from './Tag';

const Tags = ( {    key, 
                    tags,
                    handleTagClick} 
                ) => {
    return (
        <div className='tag-box'> 
            { tags.map((tagName) => (
                <Tag 
                    tagName={tagName}
                    handleTagClick={handleTagClick} />
            ))}
        </div>
    );
}

export default Tags;

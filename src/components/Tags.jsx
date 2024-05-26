import React from 'react';
import Tag from './Tag';

const Tags = ( {    key, 
                    tags,
                    handleTagDoubleClick} 
                ) => {
    return (
        <div className='tag-box'> 
            { tags.map((tagName) => (
                <Tag 
                    tagName={tagName}
                    handleTagDoubleClick={handleTagDoubleClick} />
            ))}
        </div>
    );
}

export default Tags;

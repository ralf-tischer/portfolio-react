import React, { useState } from 'react';
import Tag from './Tag';

const Tags = ( {    key, 
                    tags } 
                ) => {
    return (
        <div className='tag-box'> 
            { tags.map((tagName) => (
                <Tag tagName={tagName} />
            ))}
        </div>
    );
}

export default Tags;

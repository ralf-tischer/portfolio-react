import React, { useState } from 'react';
import Tag from './Tag';

const Tags = ( {    key, 
                    tags } 
                ) => {
    return (
        <>
            { tags.map((tagName) => (
                <Tag tagName={tagName} />
            ))}
        </>
    );
}

export default Tags;

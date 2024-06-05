import React from 'react';
import TagDetailled from './TagDetailled';
import Tag from './Tag';

const TagsDetailled = ( {    key, 
                    tags,
                    handleTagClick} 
                ) => {
    return (
        <table className='tag-container'> 

            <tbody>
            { tags.map((tagName) => (
                <tr>
                    <Tag
                        tagName={tagName}
                        handleTagClick={handleTagClick} />
                </tr>
            ))}
            </tbody>
        </table>
    );
}

export default TagsDetailled;

import React from 'react';
import TagDetailled from './TagDetailled';

const TagsDetailled = ( {    key, 
                    tags,
                    handleTagClick} 
                ) => {
    return (
        <table className='tag-container'> 

            <tbody>
            { tags.map((tagName) => (
                <tr>
                    <TagDetailled 
                        tagName={tagName}
                        handleTagClick={handleTagClick} />
                </tr>
            ))}
            </tbody>
        </table>
    );
}

export default TagsDetailled;

import React from 'react';
//const { myTags } = require('../model/data.js');

const Link = ({ link }) => {
    console.log("link", link);
    return (
        <>
            <a href={link.url} target="_blank" rel="noopener noreferrer" className='link'>
                {link.type}
            </a>
        </>
    );
}

export default Link;

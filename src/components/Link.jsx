import React from 'react';
//const { myTags } = require('../model/data.js');

const linkFilepath = '../assets/img/logos/';

const Link = ({ link }) => {
    return (
        <div className='logo-container'>
            <div>
                <a href={link.url} target="_blank" rel="noopener noreferrer" className='link'>
                    <div width="30%">
                        { link.type !== "" && <img className='logo' width='60px' src= {linkFilepath + link.type + ".png"} alt="LinkedIn" />}
                    </div>
                    <div>
                        {link.title}
                    </div>
                </a>
            </div>
        </div>
    );
}

export default Link;

import React from 'react';
//const { myTags } = require('../model/data.js');

const Link = ({ link }) => {
    return (
        <div className='logo-container'>
            <td>
                { link.type === "youtube" && <img className='logo' width='80px' src="../assets/img/logos/yt_logo_rgb_dark.png" alt={link.title} />}
                { link.type === "github" && <img className='logo' width='30px' src="../assets/img/logos/github-mark-white.png" alt={link.title} />}
                { link.type === "linkedin" && <img className='logo' width='30px' src="../assets/img/logos/LI-In-Bug.png" alt={link.title} />}
            </td>
            <td>
                <a href={link.url} target="_blank" rel="noopener noreferrer" className='link'>
                    {link.title}
                </a>
            </td>
        </div>
    );
}

export default Link;

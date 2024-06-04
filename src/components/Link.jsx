import React from 'react';
//const { myTags } = require('../model/data.js');

const linkFilepath = '../assets/img/logos/';

const Link = ({ link }) => {
    return (
        <div className='logo-container'>
            <tr>
                <a href={link.url} target="_blank" rel="noopener noreferrer" className='link'>
                    <td width="30%">
                        { link.type === "youtube" && <img className='logo' width='80px' src= {linkFilepath + 'yt_logo_rgb_dark.png'} alt="YouTube" />}
                        { link.type === "github" && <img className='logo' width='30px' src={linkFilepath + 'github-mark-white.png'} alt="GitHub" />}
                        { link.type === "linkedin" && <img className='logo' width='30px' src= {linkFilepath + 'LI-In-Bug.png'} alt="LinkedIn" />}
                    </td>
                    <td>
                        {link.title}
                    </td>
                </a>
            </tr>
        </div>
    );
}

export default Link;

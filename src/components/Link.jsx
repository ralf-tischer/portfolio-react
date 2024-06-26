import React from 'react';

const Link = ({ link }) => {
    const linkFilepath = process.env.PUBLIC_URL + '/assets/img/logos/';

    return (
        <div className='logo-container'>
            <div>
                <a href={link.url} target="_blank" rel="noopener noreferrer" className='link'>
                    <div>
                        { link.type !== "" && <img className='logo' width='60px' src= {linkFilepath + link.type + ".png"} alt={link.type} />}
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
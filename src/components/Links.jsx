import React from 'react';
import Link from './Link';

const Links = ({ links }) => {
    return (
        <div className='links-container'>
            { links.map((link, index) => (
                <Link 
                    key={index}
                    link={link}
                />
            ))}
        </div>
    );
}

export default Links;
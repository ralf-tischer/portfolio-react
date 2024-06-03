import React from 'react';
import Link from './Link';

const Links = ( { links } 
                ) => {

    console.log("links", links);

    return (
        <div className='link-container'> 
            { links.map((link) => (
                <Link 
                    link={link}
                />
            ))}
        </div>
    );
}

export default Links;

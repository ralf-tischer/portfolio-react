import React from 'react';
import Link from './Link';

const Links = ( { links } 
                ) => {

    console.log("links", links);

    return (
        <div className='link-container'>
            <table> 
            { links.map((link) => (
                <Link 
                    link={link}
                />
            ))}
            </table>
        </div>
    );
}

export default Links;

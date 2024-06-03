import React from 'react';
import Link from './Link';

const Links = ( { links } 
                ) => {

    console.log("links", links);

    return (
        <div className='link-container'>
            <table> 
            { links.map((link) => (
                
                <tr><Link 
                    link={link}
                /></tr>
            ))}
            </table>
        </div>
    );
}

export default Links;

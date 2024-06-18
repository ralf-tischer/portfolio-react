import React from 'react';
import Links from './Links.jsx';

const { myContact } = require('../model/data.js');

const Contact = () => {

    return (
        <>
            <h2>Contact</h2>
            <div className='project-card detail'>

                <h3>Ralf Tischer</h3>
                <Links links={myContact} />
            </div>
        </>
    );
};

export default Contact;
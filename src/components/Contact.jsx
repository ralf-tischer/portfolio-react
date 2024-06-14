import React from 'react';
import Links from './Links.jsx';

const { myContact } = require('../model/data.js');

const Contact = () => {

    return (
        <>
            <h1>Contact</h1>
            <div className='project-card detail'>

                <h2>Ralf Tischer</h2>
                <Links links={myContact} />
            </div>
        </>
    );
};

export default Contact;
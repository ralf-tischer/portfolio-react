import React from 'react';
import Links from './Links.jsx';

const { myContact } = require('../model/data.js');

const Contact = () => {

    return (
        <div className='detail'>
            <h1>Contact</h1>

            <h2>Ralf Tischer</h2>
            <Links links={myContact} />
        </div>
    );
};

export default Contact;
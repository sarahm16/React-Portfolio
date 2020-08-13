import React from 'react';

import Navbar from '../components/navbar/navbar';

import './style.css';

function Contact() {
    return(
        <div>
            <Navbar page='contact' />
            <div className='contact container bg-light'>
                <div className='row'>
                    <ul>
                        <li>Github</li>
                        <li>Linked In</li>
                        <li>Phone</li>                    
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Contact;
import React from 'react';

import Navbar from '../components/navbar/navbar';

import './style.css';

function Contact() {
    return(
        //make a form to send me email
        //include input field for their phone and email
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
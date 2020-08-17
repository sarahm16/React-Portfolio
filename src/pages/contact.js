import React, { Component } from 'react';

import Navbar from '../components/navbar/navbar';

import './style.css';

class Contact extends Component {
    constructor() {
        super();
        this.state = {
            message: '',
            name: '',
            email: '',
            phone: '',
            isSubmitted: false
        }
    }

    onChange = (event) => {
        console.log(event.target.id)
        this.setState({[event.target.id] : event.target.value})
    }

    render() {
        return(
            //make a form to send me email
            //include input field for their phone and email
            <div>
                <Navbar page='contact' />
                <div className='contact container bg-light'>
                    <div className='row contact-header'>
                        <h3>Contact Me</h3>
                    </div>
                    <div className='row'>
                        <form>
                            <div className="row user-contact">
                                <div className="col">
                                    <input type="text" id='name' className="form-control" placeholder="Name" onChange={this.onChange} />
                                </div>
                                <div className="col">
                                    <input type="text" id='phone' className="form-control" placeholder="Phone" onChange={this.onChange} />
                                </div>
                            </div>
                            <div className='row user-contact'>
                                <div className='col'>
                                    <input type='email' id='email' className='form-control' placeholder='Email' onChange={this.onChange} />
                                </div>
                            </div>
                            <textarea id='message' placeholder='Send me an email!' value={this.state.message} onChange={this.onChange} />
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;
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

    onSubmit = (event) => {
        event.preventDefault();
        this.setState({isSubmitted: true});
        console.log(this.state);
        console.log('submitted form')
    }

    render() {
        return(
            //make a form to send me email
            //include input field for their phone and email
            <div>
                <Navbar page='contact' />
                <div className='bg'></div>
                <div className='contact container bg-light'>
                    <div className='row bg-secondary contact-header'>
                        <h3>Contact Me</h3>
                    </div>
                    <div className='row'>
                        <form action='mailto:sarahmarie.carter@yahoo.com' onSubmit={this.onSubmit}>
                            <div className="row user-contact">
                                <div className="col">
                                    <input type="text" id='name' className="form-control" placeholder="Name" onChange={this.onChange} required />
                                </div>
                                <div className="col">
                                    <input type="text" id='phone' className="form-control" placeholder="Phone" onChange={this.onChange} required />
                                </div>
                            </div>
                            <div className='row user-contact'>
                                <div className='col'>
                                    <input type='email' id='email' className='form-control' placeholder='Email' onChange={this.onChange} required />
                                </div>
                            </div>
                            <textarea id='message' placeholder='Send me an email!' value={this.state.message} onChange={this.onChange} />
                            <div className='row user-contact'>
                                <div className='col-lg-10'></div>
                                <div className='col-lg-2'>
                                    <button type='submit' id='submit'><i className="far fa-paper-plane"></i></button>
                                </div>
                            </div>
                            {this.state.isSubmitted && <div className="alert alert-success" id='success-alert' role="alert">
                                Thank you! I will return your email shortly
                            </div>}
                            {/* <div className="alert alert-success" id='success-alert' role="alert">
                                Thank you! I will contact you shortly
                            </div> */}
                        </form>
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;
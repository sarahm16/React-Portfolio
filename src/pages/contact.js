import React, { Component } from 'react';

import Navbar from '../components/navbar/navbar';

import './style.css';

class Contact extends Component {
    constructor() {
        super();
        this.state = {
            message: '',
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
                                    <input type="text" className="form-control" placeholder="Name" />
                                </div>
                                <div className="col">
                                    <input type="text" className="form-control" placeholder="Phone" />
                                </div>
                            </div>
                            <textarea id='message' value={this.state.message} onChange={this.onChange} />
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;
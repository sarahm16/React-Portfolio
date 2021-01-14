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
        // console.log(this.state);
        // console.log('submitted form')
        const form = event.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status === 200) {
            form.reset();
            this.setState({ status: "SUCCESS" });
        } else {
            this.setState({ status: "ERROR" });
        }
        };
        xhr.send(data);
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
                        <div className='row my-details'>
                            <div className='col-lg-7 my-email'><i className='far fa-envelope' /> sarahmarie.carter@yahoo.com</div>
                            <div className='col-lg-5 my-phone'><i className="fas fa-phone" /> (253) 245-8544</div>
                        </div>



                        <form  action="https://formspree.io/f/xpzoknob" method="POST" onSubmit={this.onSubmit}>
                            <div className="row user-contact">
                                <div className="col">
                                    <input type="text" name='Name' id='name' className="form-control" placeholder="Name" onChange={this.onChange} required />
                                </div>
                                <div className="col">
                                    <input type="text" name='Phone' id='phone' className="form-control" placeholder="Phone" onChange={this.onChange} required />
                                </div>
                            </div>
                            <div className='row user-contact'>
                                <div className='col'>
                                    <input type='email' name='_replyto' id='email' className='form-control' placeholder='Email' onChange={this.onChange} required />
                                </div>
                            </div>
                            <textarea name='Message' id='message' placeholder='Send me an email!' value={this.state.message} onChange={this.onChange} />
                            <div className='row user-contact'>
                                <div className='col-lg-10'></div>
                                <div className='col-lg-2'>
                                    <button type='submit' id='submit'><i className="far fa-paper-plane"></i></button>
                                </div>
                            </div>
                            
                            {this.state.status === 'SUCCESS' && <div className='status' id='success'>
                                Thank you! I will return your email shortly
                            </div>}

                            {this.state.status === 'ERROR' && <div className='error'>
                                Oops, something went wrong!
                            </div>}

                        </form>




                        
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;
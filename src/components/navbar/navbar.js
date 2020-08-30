import React, {Component} from 'react';

import './style.css';

class Navbar extends Component {

    render() {
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                <div className='container'>
                        {/* <div className='col-lg-2'></div> */}
                        <div className='col-lg-4'></div>
                        <div className='header col-lg-4'>
                            <h1 className="name">Sarah Carter</h1>
                            <div className='job'>Web Developer</div>
                        </div>

                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                        
                            <div className="col-lg-4 justify-content-end collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav">

                                    <li className='nav-link'>
                                        <a className="nav-link" href="/"><i className={this.props.page === 'projects' ? "fas fa-code active-page" : 'fas fa-code inactive-page'}></i></a>
                                    </li>
                            
                                    <li className='nav-link'>
                                        <a className="nav-link" href="/contact"><i className={this.props.page === 'contact' ? "far fa-envelope active-page": 'far fa-envelope inactive-page'}></i></a>
                                    </li>

                                    <li className='nav-link'>
                                        <a className="nav-link" href="https://github.com/sarahm16" target='blank'><i className="fab fa-github inactive-page"></i></a>
                                    </li>

                                    <li className='nav-link'>
                                        <a className="nav-link" href="https://www.linkedin.com/in/sarah-carter-24423b1a1/" target='blank'><i className="fab fa-linkedin inactive-page"></i></a>
                                    </li>

                                    <li className='nav-link'>
                                        <a className="nav-link" href="https://docs.google.com/document/d/191JCpGsY_NVzEbBzjS--NwL3gXrwIbxQJBIUa-oQ6IU/edit?usp=sharing" target='blank'><i className="far fa-file inactive-page"></i></a>
                                    </li>
                                </ul>
                            </div>
                </div>
            </nav>
        )
    }
}

export default Navbar
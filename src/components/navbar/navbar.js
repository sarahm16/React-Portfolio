import React, {Component} from 'react';

import './style.css';

class Navbar extends Component {

    render() {
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                <div className='container'>
                <h2 className="name">Sarah Carter</h2>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            
                <div className="justify-content-end collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        {/* <li className={this.props.page === 'aboutme' ? 'nav-link active' : 'nav-link'}>
                            <a className="nav-link" href="/">About Me </a>
                        </li> */}

                        <li className='nav-link'>
                            <a className="nav-link" href="/"><i className={this.props.page === 'projects' ? "fas fa-code active-page" : 'fas fa-code inactive-page'}></i></a>
                        </li>
                   
                        <li className='nav-link'>
                            <a className="nav-link" href="/contact"><i className={this.props.page === 'contact' ? "far fa-envelope active-page": 'far fa-envelope inactive-page'}></i></a>
                        </li>

                        <li className='nav-link'>
                            <a className="nav-link" href="https://github.com/sarahm16"><i className="fab fa-github inactive-page"></i></a>
                        </li>

                        <li className='nav-link'>
                            <a className="nav-link" href="https://www.linkedin.com/in/sarah-carter-24423b1a1/"><i className="fab fa-linkedin inactive-page"></i></a>
                        </li>
                        
                    </ul>
                </div>
                </div>
            </nav>
            // <h2>Navbar</h2>
        )
    }
}

export default Navbar
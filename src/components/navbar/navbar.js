import React, {Component} from 'react';

import './style.css';

class Navbar extends Component {

    render() {
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className='container'>
                <a className="navbar-brand" href="/">Sarah Carter</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            
                <div className="justify-content-end collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        {/* <li className={this.props.page === 'aboutme' ? 'nav-link active' : 'nav-link'}>
                            <a className="nav-link" href="/">About Me </a>
                        </li> */}
                   
                        <li className={this.props.page === 'contact' ? 'nav-link active' : 'nav-link'}>
                            <a className="nav-link" href="/contact"><i className="far fa-envelope"></i></a>
                        </li>

                        <li className='nav-link'>
                            <a className="nav-link" href="https://github.com/sarahm16"><i className="fab fa-github"></i></a>
                        </li>

                        <li className='nav-link'>
                            <a className="nav-link" href="https://www.linkedin.com/in/sarah-carter-24423b1a1/"><i className="fab fa-linkedin"></i></a>
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
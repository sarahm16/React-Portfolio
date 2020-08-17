import React, {Component} from 'react';

import './style.css';

class Project extends Component {
    render() {
        console.log(this.props.details)
        const { name, description, technologies, url, image } = this.props.details;
        console.log(typeof image);
        return(
            <div className='container'>
                <div className='row'>
                    <h2>{name}</h2>
                </div>
                {/* <div className='row'>
                    <div className='col'><img src={require(image)} alt={name}></img></div>
                </div> */}
                <div className='row description bg-light'>
                    {description}
                </div>

            </div>
        )
    }
}

export default Project;
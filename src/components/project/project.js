import React, {Component} from 'react';

import './style.css';

const images = require.context('../../../public/images', true);

class Project extends Component {

    render() {
        const { name, description, technologies, url, image } = this.props.details;

        let src = images(`./${image}.png`);

        return(
            <div className='container'>
                <div className='row'>
                    <h2>{name}</h2>
                </div>
                <div className='row'>
                    <div className='col'><img src={src} alt={name}></img></div>
                </div>
                <div className='row description bg-light'>
                    {description}
                </div>

            </div>
        )
    }
}

export default Project;
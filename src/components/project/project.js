import React, {Component} from 'react';

import './style.css';

const images = require.context('../../../public/images', true);

class Project extends Component {
    constructor() {
        super();
        this.state={
            src: ''
        }
    }

    componentDidMount() {
        let src = images('./fairweather.png');
        this.setState({
            src: src
        })
    }

    render() {
        console.log('images: ' + images);
        //console.log(this.props.details)
        const { name, description, technologies, url, image } = this.props.details;
        //console.log(typeof image);
        //console.log(image);
        return(
            <div className='container'>
                <div className='row'>
                    <h2>{name}</h2>
                </div>
                <div className='row'>
                    <div className='col'><img src={this.state.src} alt={name}></img></div>
                </div>
                <div className='row description bg-light'>
                    {description}
                </div>

            </div>
        )
    }
}

export default Project;
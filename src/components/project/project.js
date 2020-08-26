import React, {Component} from 'react';

import './style.css';

const images = require.context('../../../public/images', true);

class Project extends Component {
    constructor() {
        super();
        this.state={
            currentImage: 0
        }
    }

    nextImage = () => {
        let nextImage = this.state.currentImage + 1;
        if(nextImage < this.props.details.image.length) {
            this.setState({currentImage: nextImage});
        }
    }

    prevImage = () => {
        let prevImage = this.state.currentImage - 1;
        if(prevImage >= 0) {
            this.setState({currentImage: prevImage})
        }
    }

    render() {
        const { name, description, technologies, url, image } = this.props.details;

        let src = images(`./${image[this.state.currentImage]}.png`);

        return(
            <div className='container'>
                <div className='justify-content-center row title bg-secondary'>
                    <h2>{name}</h2>
                </div>
                <div className='row'>
                    <div className='col'><img src={src} alt={name}></img>
                        <button onClick={this.prevImage}>Previous Image</button>
                        <button onClick={this.nextImage}>Next image</button>
                    </div>
                </div>
                <div className='row description'>
                    {description}
                </div>

            </div>
        )
    }
}

export default Project;
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
        const { name, description, technologies, url, image, imageWidth } = this.props.details;

        let src = images(`./${image[this.state.currentImage]}.png`);

        return(
            <div className='container'>
                <div className='justify-content-center row title bg-secondary'>
                    <h3>{name}</h3>
                </div>
                <div className='row'>
                    <div className='col'>
                        <div className='row'>
                            <div className='col-lg-1 my-auto'>
                                <button id='next' onClick={this.prevImage}><i className="fas fa-chevron-left"></i></button>
                            </div>
                            <div className='col-lg-10'>
                                <img src={src} alt={name} style={{width: imageWidth}} className='mx-auto'></img>
                            </div>
                            <div className='col-lg-1 my-auto'>
                                <button id='previous' onClick={this.nextImage}><i className="fas fa-chevron-right"></i></button>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className='row description'>
                    {description}
                </div>
                <div className='link'>
                    <a href={url}>{url}</a>
                </div>
            </div>
        )
    }
}

export default Project;
import React, {Component} from 'react';
// import {Link} from 'react-router-dom';

import './style.css';

const images = require.context('../../../public/images', true);

class Project extends Component {
    //need to reorganize class so that project details are set into state when component mounts, so that the logic is not run every time the component rerenders

    state={
        currentImage: 0,
        chrome: true
    }

    componentDidMount() {
        //let chromeAgent = userAgentString.indexOf("Chrome") > -1;
        console.log(navigator.userAgent);
        let chromeAgent = navigator.userAgent.indexOf('Chrome') > -1;
        let safariAgent = navigator.userAgent.indexOf('Safari') > -1;

        if(!chromeAgent) {
            this.setState({
                chrome: false
            })
        }
        console.log(safariAgent);
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
        let src;

        const { name, description, technologies, url, image, imageWidth } = this.props.details;

        this.state.chrome ? src = images(`./${image[this.state.currentImage]}.webp`) : src = images(`./${image[this.state.currentImage]}.png`)
        
        return(
            <div className='container'>
                <div className='justify-content-center row title bg-secondary'>
                    <h3>{name}</h3>
                </div>
                <div className='justify-content-center row link'>
                    <a href={url} target='blank' id='link'>{url}</a>
                </div>
                <div className='row'>
                    <div className='col'>
                        <div className='row'>
                            <div className='col-lg-1 my-auto'>
                                <button id='next' onClick={this.prevImage}><i className="fas fa-chevron-left"></i></button>
                            </div>
                            <div className='col-lg-10 images'>
                                <img src={src} alt={name} style={{width: imageWidth}} className='mx-auto'></img>
                                <div className='carousel'>
                                    {image.map((image, index) => {
                                        return(
                                            <i className={index === this.state.currentImage ? 'fas fa-circle active-icon' : 'fas fa-circle inactive-icon'}></i>
                                        )
                                    })}
                                </div>
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
                {/* <div className='link'> */}
                    {/* <Link to={url}>{url}</Link> */}
                    {/* <a href={url} target='blank'>{url}</a> */}
                {/* </div> */}
            </div>
        )
    }
}

export default Project;
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

    // componentDidMount() {
    //     //console.log(this.props.details);
    //     let image = this.props.details.image;
    //     this.setState({
    //         src: image
    //     })
    //     // let src = images('./fairweather.png');
    //     // this.setState({
    //     //     src: src
    //     // })
    // }

    render() {
        const { name, description, technologies, url, image } = this.props.details;
        console.log(image);
        let src = images(`./${image}.png`);
        //console.log(typeof image);
        //console.log(image);
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
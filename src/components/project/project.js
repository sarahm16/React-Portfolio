import React, {Component} from 'react';

class Project extends Component {

    render() {
        return(
            <h2>{this.props.details.name}</h2>
        )
    }
}

export default Project;
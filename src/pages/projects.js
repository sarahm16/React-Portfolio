import React, {Component} from 'react';

import Navbar from '../components/navbar/navbar';
import projectList from '../db/db';

import './style.css';

class Projects extends Component {
    constructor() {
        super();
        this.state={
            projectList: projectList
        }
    }

    setActiveProject = () => {
        console.log('clicked on project')
    }

    render() {
        console.log(this.state.projectList);
        return(
            <div>
                <Navbar page='projects' />
                <div className='container projects'>
                    <div className='row'>
                        <div className='col-lg-4 project-list bg-light'>
                            <div className='row project-header'>
                                <h4>Projects</h4>
                            </div>
                            {this.state.projectList.map(project => {
                                return(
                                    <div className='row project-name'>
                                        <button className='project-button bg-light' id={project.name} onClick={this.setActiveProject}>{project.name}</button>
                                    </div>
                                )
                            })}
                        </div>
                        <div className='col-lg-8'></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Projects;
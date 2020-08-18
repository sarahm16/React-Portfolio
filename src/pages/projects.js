import React, {Component} from 'react';

import Navbar from '../components/navbar/navbar';
import Project from '../components/project/project';
import projectList from '../db/db';

import './style.css';


class Projects extends Component {
    constructor() {
        super();
        this.state={
            projectList: projectList,
            activeProject: ''
        }
    }

    componentDidMount() {
        this.setState({
            activeProject: this.state.projectList[0]
        })
    }

    setActiveProject = (event) => {
        console.log('clicked on project')
        this.setState({
            activeProject: this.state.projectList[event.target.id]
        })
        console.log(this.state.activeProject);
    }

    render() {
        return(
            <div>
                <Navbar page='projects' />
                <div className='container projects'>
                    <div className='row'>
                        <div className='col-lg-4 project-list bg-light'>
                            <div className='row project-header bg-secondary'>
                                <h4>Projects</h4>
                            </div>
                            {this.state.projectList.map((project, index) => {
                                return(
                                    <div className='row project-name'>
                                        <button className={this.state.activeProject.name === project.name ? 'project-button bg-light active-project' : 'project-button bg-light'} id={index} onClick={this.setActiveProject}>{project.name}</button>
                                    </div>
                                )
                            })}
                        </div>
                        <div className='col-lg-8'>
                            <Project details={this.state.activeProject}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Projects;
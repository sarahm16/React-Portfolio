import React, {Component, useState} from 'react';

import Navbar from '../components/navbar/navbar';
import Project from '../components/project/project';
import projectList from '../db/db';

import './style.css';


class Projects extends Component {
    constructor() {
        super();
        this.state={
            projectList: projectList,
            activeProject: projectList[0],
            newProject: false,
            projectKey: 1
        }
    }

    // componentDidMount() {
    //     const [projectKey, setProjectKey] = useState(1);
    //     const refreshProject = () => setProjectKey(projectKey + 1)
    // }

    setActiveProject = (event) => {
        let newProjectKey = this.state.projectKey + 1
        //set active project to project that user clicks on
        this.setState({
            activeProject: this.state.projectList[event.target.id],
            projectKey: newProjectKey
        })

        // this.setState(prevState => {
        //     return {
        //         activeProject: prevState.projectList[event.target.id],
        //         projectKey: prevState.projectKey + 1
        //     }
        // })
        console.log(this.state.projectKey)
    }

    render() {
        return(
            <div>
                <Navbar page='projects' />
                <div className='bg'></div>
                <div className='projects'>
                    <div className='row justify-content-between'>
                        <div className='col-lg-3 project-list bg-light'>
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
                        <div className='col-lg-9 project-container'>
                            <Project details={this.state.activeProject} key={this.state.projectKey} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Projects;
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
    render() {
        console.log(this.state.projectList);
        return(
            <div>
                <Navbar page='projects' />
                <div className='container projects'>
                    <div className='row'>
                        <div className='col-lg-3 project-list bg-light'>
                            {this.state.projectList.map(project => {
                                return(
                                    <div className='row'>
                                        {project.name}
                                    </div>
                                )
                            })}
                        </div>
                        <div className='col-lg-9'></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Projects;
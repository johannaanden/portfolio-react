import React, { Component } from "react"
import axios from "axios"

class Projects extends Component {
    constructor() {
        super();
        this.state = {
            projects: []
        };
    }

    componentDidMount() {
        axios.get('./src/data/projects.json')
            .then(response => {
                this.setState({
                    projects: response.data
                })
            })
    }

    render() {
        const projects = this.state.projects
        let projectsList

        if (projects.length > 0) {
            projectsList = projects.map(projects => {
                return (
                    <div key={projects.id}>
                        <h3 className="content-text">
                            {projects.name}
                        </h3>    
                    </div>
                )
            })
        }

        return (
            <div>
                <h1 className="context-text">My Projects</h1>
                {projectsList}
            </div>
        )
    }
};

export default Projects
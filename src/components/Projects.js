import React, { useEffect, useState } from 'react';
import Portfolio from './Portfolio';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    // console.log(categories)
    console.log(projects);

    useEffect(() => {
      fetch("https://dev-ifty-server-ifty17.vercel.app/projects")
        .then((res) => res.json())
        .then((data) => setProjects(data));
    }, []);
    return (
        <div>
            {
                projects.map(project => <Portfolio key={project.id} project={project}></Portfolio>)
            }
        </div>
    );
};

export default Projects;
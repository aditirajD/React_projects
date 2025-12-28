import React from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <div id="Projects" className='p-10 md:p-20 text-white'>
      <h1 className='text-2xl md:text-4xl text-white font-bold'>Projects</h1>
      <div className='py-12 px-50 flex flex-wrap gap-15'>
        <ProjectCard 
        title="Blogging Website"
        main="this is a blogging website created in next js and used some component library" />

        <ProjectCard 
        title="Youtube Clone"
        main="this is a blogging website created in next js and used some component library" />

        <ProjectCard 
        title="Netflix Clone"
        main="this is a blogging website created in next js and used some component library" />
      </div>
    </div>
  )
}

export default Projects;


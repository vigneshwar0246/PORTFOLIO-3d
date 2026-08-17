import { projectsData } from '../utils/projectsData';
import ProjectCard from '../components/ProjectCard';

export default function Projects() {
  return (
    <section id="projects" className="section projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projectsData.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}

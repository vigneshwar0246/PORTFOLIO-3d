export default function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <img src={project.image} alt={project.title} />
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className="tags">
        {project.tech.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </article>
  );
}

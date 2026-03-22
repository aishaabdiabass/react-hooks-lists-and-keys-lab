function ProjectItem({ name, technologies }) {
  return (
    <div>
      <h3>{name}</h3>

      {technologies.map((tech) => (
        <span key={tech} style={{ marginRight: "8px" }}>
          {tech}
        </span>
      ))}
    </div>
  );
}

export default ProjectItem;
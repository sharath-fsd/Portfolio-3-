import { projects } from "../data/portfolio.js";
import SectionHeading from "./SectionHeading.jsx";

function ProjectCard({ project }) {
  return (
    <article className="project-card reveal">
      <p className="project-number">Project / {project.number}</p>
      <figure className="project-visual">
        <img src={project.image} alt={project.imageAlt} loading="lazy" decoding="async" />
      </figure>
      <div className="project-content">
        <h3>
          {project.title[0]}
          <br />
          {project.title[1]}
        </h3>
        {project.experience && (
          <p className="project-experience">
            <strong>{project.experience.role}</strong>
            <span>{project.experience.duration}</span>
          </p>
        )}
        <p className="project-stack">{project.stack}</p>
        {project.context && <p className="project-context">{project.context}</p>}
        <ul className="project-details">
          {project.details.map((detail) => (
            <li key={detail}>{detail}</li>
          ))}
        </ul>
      </div>
      <a
        href={project.repository}
        target="_blank"
        rel="noreferrer"
        aria-label={project.repositoryLabel}
      >
        GitHub repository <span aria-hidden="true">↗</span>
      </a>
    </article>
  );
}

export default function Projects() {
  return (
    <section className="featured page-shell" id="featured" aria-labelledby="featured-title">
      <SectionHeading
        index="02 / Selected work"
        title="Featured work"
        titleId="featured-title"
      />
      <div className="project-grid">
        {projects.map((project) => (
          <ProjectCard key={project.number} project={project} />
        ))}
      </div>
    </section>
  );
}

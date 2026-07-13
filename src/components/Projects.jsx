import { projects } from '../data/portfolio.js';
import Reveal from './Reveal.jsx';

function Projects() {
  return (
    <section className="section-shell projects" id="projects" aria-label="Backend Projects">
      <div className="project-list">
        {projects.map((project, index) => (
          <Reveal
            as="article"
            className="project-card glass-panel"
            delay={index * 0.06}
            key={project.title}
            whileHover={{ y: -8 }}
          >
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              {project.technologies ? (
                <div className="project-tech-list" aria-label={`${project.title} technologies`}>
                  {project.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>
              ) : null}
              {project.responsibilities ? (
                <div className="project-detail-block">
                  <h4>Responsibilities</h4>
                  <ul>
                    {project.responsibilities.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              ) : null}
              {project.repository ? (
                <a className="button button-secondary project-link" href={project.repository} target="_blank" rel="noreferrer">
                  GitHub
                </a>
              ) : null}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export default Projects;

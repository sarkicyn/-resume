import { projects } from '../data/portfolio.js';
import ProjectVisual from './ProjectVisual.jsx';
import Reveal from './Reveal.jsx';
import SectionHeading from './SectionHeading.jsx';

function Projects() {
  return (
    <section className="section-shell projects" id="projects" aria-labelledby="projects-title">
      <SectionHeading
        eyebrow="Projects"
        id="projects-title"
        title="Case-study style work for games and interactive systems."
      />

      <div className="project-list">
        {projects.map((project, index) => (
          <Reveal
            as="article"
            className="project-card glass-panel"
            delay={index * 0.06}
            key={project.title}
            whileHover={{ y: -8 }}
          >
            <ProjectVisual type={project.visual} title={project.title} />

            <div className="project-content">
              <div className="project-kicker">
                <span>Case Study {String(index + 1).padStart(2, '0')}</span>
                <span>{project.type}</span>
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <ul>
                {project.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
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

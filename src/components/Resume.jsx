import { resume } from '../data/portfolio.js';
import Reveal from './Reveal.jsx';

function Resume() {
  return (
    <section className="section-shell resume" id="resume" aria-label="ATS Resume">
      <Reveal className="resume-document">
        <header className="resume-header">
          <div>
            <p className="eyebrow">Candidate Profile</p>
            <h3>{resume.name}</h3>
            <p className="resume-role">{resume.role}</p>
            <p className="resume-location">{resume.location}</p>
          </div>

          <div className="resume-contact-list" aria-label="Resume contact links">
            {resume.contact.map((item) => (
              <a href={item.href} key={item.label} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
                <span>{item.label}</span>
                {item.value}
              </a>
            ))}
          </div>
        </header>

        <section className="resume-section" aria-labelledby="resume-summary-title">
          <h4 id="resume-summary-title">Professional Summary</h4>
          <p>{resume.summary}</p>
        </section>

        <section className="resume-section" aria-labelledby="resume-skills-title">
          <h4 id="resume-skills-title">Core Skills</h4>
          <div className="resume-skill-grid">
            {resume.coreSkills.map((group) => (
              <div className="resume-skill-group" key={group.title}>
                <h5>{group.title}</h5>
                <ul className="resume-chip-list">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="resume-section" aria-labelledby="resume-projects-title">
          <h4 id="resume-projects-title">Project Experience</h4>
          <div className="resume-project-list">
            {resume.projectExperience.map((project) => (
              <article className="resume-project" key={project.title}>
                <div className="resume-project-heading">
                  <div>
                    <h5>{project.title}</h5>
                    <p>{project.role}</p>
                  </div>
                  <ul className="resume-stack-list" aria-label={`${project.title} technologies`}>
                    {project.stack.split(', ').map((technology) => (
                      <li key={technology}>{technology}</li>
                    ))}
                  </ul>
                </div>
                {project.repository ? (
                  <a className="resume-project-link" href={project.repository} target="_blank" rel="noreferrer">
                    {project.repository}
                  </a>
                ) : null}
                <ul className="resume-project-points">
                  {project.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="resume-section resume-keywords" aria-labelledby="resume-keywords-title">
          <h4 id="resume-keywords-title">Additional Keywords</h4>
          <p>{resume.keywords.join(' | ')}</p>
        </section>

        <div className="resume-actions">
          <a className="button button-primary" href={`${import.meta.env.BASE_URL}Artem_Sarkisyan_ATS_Resume.txt`} download>
            Download ATS TXT
          </a>
          <a className="button button-secondary" href="#contact">
            Contact Me
          </a>
        </div>
      </Reveal>
    </section>
  );
}

export default Resume;

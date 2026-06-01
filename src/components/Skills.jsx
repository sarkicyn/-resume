import { skillGroups } from '../data/portfolio.js';
import Reveal from './Reveal.jsx';
import SectionHeading from './SectionHeading.jsx';

function Skills() {
  return (
    <section className="section-shell skills-section" id="skills" aria-labelledby="skills-title">
      <SectionHeading
        eyebrow="ATS Skills"
        id="skills-title"
        title="Unity skills grouped for recruiters and real project work."
        intro="A clear, ATS-friendly view of the tools and systems used in personal Unity development projects."
      />

      <div className="skills-grid">
        {skillGroups.map((group, index) => (
          <Reveal
            as="article"
            className="skill-card glass-panel"
            delay={index * 0.04}
            key={group.title}
            whileHover={{ y: -8, scale: 1.01 }}
          >
            <span className="card-index">{String(index + 1).padStart(2, '0')}</span>
            <h3>{group.title}</h3>
            <ul className="skill-badge-list">
              {group.items.map((item) => (
                <li className="skill-badge" key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export default Skills;

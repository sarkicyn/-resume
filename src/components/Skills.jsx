import { skillGroups } from '../data/portfolio.js';
import Reveal from './Reveal.jsx';
import SectionHeading from './SectionHeading.jsx';

function Skills() {
  return (
    <section className="section-shell skills-section" id="skills" aria-labelledby="skills-title">
      <SectionHeading
        eyebrow="Focus Areas"
        id="skills-title"
        title="Practical skills across gameplay, UI, and asset pipelines."
        intro="Grouped around the workflows most useful for small teams and prototype-heavy game development."
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
            <ul>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export default Skills;

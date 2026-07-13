import { tools } from '../data/portfolio.js';
import Reveal from './Reveal.jsx';
import SectionHeading from './SectionHeading.jsx';

function Tools() {
  return (
    <section className="section-shell tools" aria-labelledby="tools-title">
      <SectionHeading eyebrow="Tools" id="tools-title" title="Backend stack and production vocabulary." />

      <Reveal className="tag-cloud">
        {tools.map((tool) => (
          <span className="tool-tag" key={tool}>
            {tool}
          </span>
        ))}
      </Reveal>
    </section>
  );
}

export default Tools;

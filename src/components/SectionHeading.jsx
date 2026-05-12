import Reveal from './Reveal.jsx';

function SectionHeading({ eyebrow, title, intro, id }) {
  return (
    <Reveal className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2 id={id}>{title}</h2>
      {intro ? <p className="section-intro">{intro}</p> : null}
    </Reveal>
  );
}

export default SectionHeading;

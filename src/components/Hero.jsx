import Marquee from './Marquee.jsx';
import Reveal from './Reveal.jsx';

const heroTags = [
  'Unity C#',
  'Gameplay Systems',
  'UI Integration',
  'Blender Pipeline',
  'Technical Art',
];

const heroFeatures = [
  {
    title: 'Gameplay Systems',
    description: 'Progression, stamina, rewards, events',
  },
  {
    title: 'Technical Art',
    description: 'Materials, lighting, baking, asset pipeline',
  },
  {
    title: 'Frontend / Mini Apps',
    description: 'Telegram Mini Apps, modular UI, responsive layout',
  },
];

function Hero() {
  return (
    <section className="hero section-shell" id="home" aria-labelledby="hero-title">
      <div className="hero-grid">
        <Reveal className="hero-copy">
          <p className="eyebrow">GAMEPLAY PROGRAMMER / TECHNICAL ARTIST</p>
          <h1 className="hero-title" id="hero-title">
            Building gameplay systems, UI logic, and technical art workflows.
          </h1>
          <p className="hero-subtitle">
            Junior gameplay programmer and technical artist focused on Unity, C#,
            Blender-to-Unity pipelines, interactive UI systems, and progression-based game
            mechanics.
          </p>

          <div className="cta-row" aria-label="Primary actions">
            <a className="button button-primary" href="#projects">
              View Projects
            </a>
            <a className="button button-secondary" href="#contact">
              Contact Me
            </a>
          </div>
        </Reveal>

        <Reveal className="hero-panel-wrap" delay={0.12}>
          <div className="hero-panel glass-panel">
            <div className="hero-panel-topline">
              <span>Profile System</span>
              <strong>01</strong>
            </div>

            <div className="hero-tag-grid" aria-label="Core skills">
              {heroTags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>

            <div className="hero-feature-list">
              {heroFeatures.map((feature, index) => (
                <article className="hero-feature-card" key={feature.title}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <h2>{feature.title}</h2>
                  <p>{feature.description}</p>
                </article>
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      <Marquee
        items={[
          'Unity Gameplay',
          'Technical Art',
          'Progression Systems',
          'Blender Pipeline',
          'Interactive UI',
        ]}
      />
    </section>
  );
}

export default Hero;

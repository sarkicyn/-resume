import Marquee from './Marquee.jsx';
import Reveal from './Reveal.jsx';

function Hero() {
  return (
    <section className="hero section-shell" id="home" aria-labelledby="hero-title">
      <div className="hero-grid">
        <Reveal className="hero-copy">
          <p className="eyebrow">Unity C# Developer</p>
          <h1 className="hero-title" id="hero-title">
            Junior Unity Developer
          </h1>
          <p className="hero-subtitle">
            Unity C# developer focused on gameplay systems, UI implementation, animation
            logic, and interactive game mechanics.
          </p>

          <div className="cta-row" aria-label="Primary actions">
            <a className="button button-primary hero-contact-button" href="#contact">
              Contact Me
            </a>
          </div>
        </Reveal>
      </div>

      <Marquee
        items={[
          'Unity Gameplay',
          'C# Gameplay Programming',
          'Progression Systems',
          'Unity UI',
          'Animator Controller',
          'Blender Assets',
        ]}
      />
    </section>
  );
}

export default Hero;

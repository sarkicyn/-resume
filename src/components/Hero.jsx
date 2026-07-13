import Marquee from './Marquee.jsx';
import Reveal from './Reveal.jsx';

function Hero() {
  return (
    <section className="hero section-shell" id="home" aria-labelledby="hero-title">
      <div className="hero-grid">
        <Reveal className="hero-copy">
          <p className="eyebrow">C#/.NET Backend Developer</p>
          <h1 className="hero-title" id="hero-title">
            Junior C#/.NET Backend Developer
          </h1>
          <p className="hero-subtitle">
            Backend developer focused on ASP.NET Core APIs, secure authentication,
            relational data, and maintainable server-side systems.
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
          'C# / .NET',
          'ASP.NET Core',
          'Entity Framework Core',
          'PostgreSQL',
          'JWT / OAuth',
          'Docker / Testing',
        ]}
      />
    </section>
  );
}

export default Hero;

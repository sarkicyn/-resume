import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading.jsx';
import Reveal from './Reveal.jsx';

const aboutParagraphs = [
  'I am a Junior / Junior+ C#/.NET Backend Developer focused on building REST APIs, working with relational data, and implementing secure server-side logic.',
  'My primary project is MyApiBlya, a backend API where I work with ASP.NET Core, Entity Framework Core, PostgreSQL, authentication, Docker, and automated testing.',
  'I enjoy turning requirements into clear API contracts, reliable data access, and maintainable backend code while steadily expanding my .NET engineering toolkit.',
];

const aboutTextVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.08,
    },
  },
};

const aboutParagraphVariants = {
  hidden: {
    opacity: 0,
    y: 34,
    filter: 'blur(10px)',
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.82,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function About() {
  return (
    <section className="section-shell about" id="about" aria-labelledby="about-title">
      <SectionHeading
        eyebrow="Professional Summary"
        id="about-title"
        title={
          <>
            <span className="heading-line">Backend systems</span>
            <span className="heading-line">with honest junior focus.</span>
          </>
        }
      />
      <div className="about-layout">
        <motion.div
          className="large-copy"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.24, margin: '0px 0px -12% 0px' }}
          variants={aboutTextVariants}
        >
          {aboutParagraphs.map((paragraph) => (
            <motion.p key={paragraph} variants={aboutParagraphVariants}>
              {paragraph}
            </motion.p>
          ))}
        </motion.div>
        <Reveal className="about-notes glass-panel" delay={0.1}>
          <div>
            <span>Focus</span>
            <strong>REST APIs, authentication, data access, backend architecture</strong>
          </div>
          <div>
            <span>Tools</span>
            <strong>C#, .NET, ASP.NET Core, EF Core, PostgreSQL, Docker</strong>
          </div>
          <div>
            <span>Direction</span>
            <strong>Junior / Junior+ backend roles and practical product development</strong>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default About;

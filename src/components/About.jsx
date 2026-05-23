import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading.jsx';
import Reveal from './Reveal.jsx';

const aboutParagraphs = [
  'Junior Gameplay Programmer and Technical Artist focused on gameplay systems, UI integration, and technical art workflows in Unity and Blender.',
  'Experienced in developing progression-based mechanics, gameplay logic, and interactive UI systems using C# in Unity.',
  'Familiar with Blender-to-Unity asset pipelines, material creation, lighting setup, and animation workflows.',
  'Also has basic frontend development experience through work on Telegram Mini Apps and modular UI systems.',
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
            <span className="heading-line">Systems thinking</span>
            <span className="heading-line">with a technical art eye.</span>
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
            <strong>Gameplay systems, UI feedback, asset workflows</strong>
          </div>
          <div>
            <span>Tools</span>
            <strong>Unity, Blender, C#, JavaScript</strong>
          </div>
          <div>
            <span>Direction</span>
            <strong>Indie games, progression loops, interactive systems</strong>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default About;

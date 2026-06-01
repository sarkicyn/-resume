import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading.jsx';
import Reveal from './Reveal.jsx';

const aboutParagraphs = [
  'I am a Junior Unity Developer focused on building gameplay systems and interactive experiences using C# and Unity.',
  'My primary project is a gym-themed progression game where I design and implement gameplay mechanics such as stamina management, level progression, tutorial systems, UI interactions, and animation-driven object behavior.',
  'I enjoy solving gameplay programming challenges, improving user experience, and continuously expanding my knowledge of Unity and game development.',
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
            <span className="heading-line">Gameplay systems</span>
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
            <strong>Gameplay programming, Unity UI, animation logic</strong>
          </div>
          <div>
            <span>Tools</span>
            <strong>Unity, C#, TextMeshPro, Blender, Git</strong>
          </div>
          <div>
            <span>Direction</span>
            <strong>Junior Unity roles, personal game projects, practical growth</strong>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default About;

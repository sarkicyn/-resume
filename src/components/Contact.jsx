import { motion } from 'framer-motion';
import Reveal from './Reveal.jsx';

function Contact() {
  return (
    <section className="section-shell contact" id="contact" aria-labelledby="contact-title">
      <Reveal className="contact-panel glass-panel">
        <p className="eyebrow">Contact</p>
        <h2 id="contact-title">Interested in gameplay programming, technical art, and interactive systems.</h2>

        <div className="contact-links">
          <motion.a href="mailto:sarkicyn@icloud.com" whileHover={{ y: -5 }} whileTap={{ scale: 0.99 }}>
            <span>Email</span>
            sarkicyn@icloud.com
          </motion.a>
          <motion.a
            href="https://github.com/sarkicyn"
            target="_blank"
            rel="noreferrer"
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.99 }}
          >
            <span>GitHub</span>
            github.com/sarkicyn
          </motion.a>
          <motion.a
            href="https://t.me/yeeeee11111"
            target="_blank"
            rel="noreferrer"
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.99 }}
          >
            <span>Telegram</span>
            @yeeeee11111
          </motion.a>
        </div>
      </Reveal>
    </section>
  );
}

export default Contact;

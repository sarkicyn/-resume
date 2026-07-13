import { motion } from 'framer-motion';
import Reveal from './Reveal.jsx';

function Contact() {
  return (
    <section className="section-shell contact" id="contact" aria-labelledby="contact-title">
      <Reveal className="contact-panel glass-panel">
        <p className="eyebrow">Contact</p>
        <h2 id="contact-title">Interested in backend APIs, integrations, and reliable data services.</h2>

        <div className="contact-links">
          <motion.a href="mailto:sarkicyn@icloud.com" whileHover={{ y: -5 }} whileTap={{ scale: 0.99 }}>
            <span className="contact-link-label">Email</span>
            <span className="contact-link-value">sarkicyn@icloud.com</span>
          </motion.a>
          <motion.a
            href="https://github.com/sarkicyn"
            target="_blank"
            rel="noreferrer"
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.99 }}
          >
            <span className="contact-link-label">GitHub</span>
            <span className="contact-link-value">github.com/sarkicyn</span>
          </motion.a>
          <motion.a
            href="https://t.me/yeeeee11111"
            target="_blank"
            rel="noreferrer"
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.99 }}
          >
            <span className="contact-link-label">Telegram</span>
            <span className="contact-link-value">@yeeeee11111</span>
          </motion.a>
        </div>
      </Reveal>
    </section>
  );
}

export default Contact;

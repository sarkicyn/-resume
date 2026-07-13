import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Projects from './components/Projects.jsx';
import Resume from './components/Resume.jsx';
import Skills from './components/Skills.jsx';
import Tools from './components/Tools.jsx';

function App() {
  return (
    <div className="app-shell">
      <Header />
      <main>
        <Hero />
        <About />
        <Resume />
        <Skills />
        <Projects />
        <Tools />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;

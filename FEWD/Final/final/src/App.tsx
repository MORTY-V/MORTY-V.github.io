import React, { useState, useEffect } from 'react';
import './App.css';

interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  liveLink?: string;
  githubLink: string;
  image?: string;
}

interface Skill {
  category: string;
  items: string[];
}

// Typewriter Component
const TypewriterEffect: React.FC<{ text: string; speed?: number }> = ({ text, speed = 50 }) => {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (!isTyping) return;

    if (displayText.length < text.length) {
      const timer = setTimeout(() => {
        setDisplayText(text.slice(0, displayText.length + 1));
      }, speed);

      return () => clearTimeout(timer);
    } else {
      setIsTyping(false);
    }
  }, [displayText, text, speed, isTyping]);

  return (
    <span className="typewriter">
      {displayText}
      {isTyping && <span className="cursor"></span>}
    </span>
  );
};

const projects: Project[] = [
  {
    id: 1,
    title: 'Project Name',
    description: 'Brief description of what this project does and what you learned',
    tech: ['React', 'TypeScript', 'Vite'],
    liveLink: 'https://project-live-link.com',
    githubLink: 'https://github.com/yourusername/project-repo',
  },
  {
    id: 2,
    title: 'Another Project',
    description: 'Another project showcasing different skills',
    tech: ['JavaScript', 'Node.js', 'MongoDB'],
    githubLink: 'https://github.com/yourusername/project-repo',
  },
  {
    id: 3,
    title: 'Third Project',
    description: 'Demonstrate variety in your projects',
    tech: ['React', 'Tailwind CSS', 'Firebase'],
    liveLink: 'https://project-live-link.com',
    githubLink: 'https://github.com/yourusername/project-repo',
  },
];

const skills: Skill[] = [
  {
    category: 'Frontend',
    items: ['React', 'TypeScript', 'CSS', 'HTML', 'Vite'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express', 'REST APIs'],
  },
  {
    category: 'Tools',
    items: ['Git', 'GitHub', 'VS Code', 'npm'],
  },
];

function App() {
  return (
    <div className="app">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>
            <TypewriterEffect text="Hi, I'm Morty" speed={80} />
          </h1>
          <p className="subtitle">Full Stack Developer | Problem Solver | Lifelong Learner</p>
          <div className="cta-buttons">
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="#contact" className="btn btn-secondary">Get In Touch</a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <h2>About Me</h2>
        <p>
          I'm a passionate entry-level developer excited to build web applications and solve real-world problems. 
          I have a strong foundation in React, JavaScript, and modern web development practices. 
          I'm always learning and love collaborating with others!
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <h2>Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-stack">
                {project.tech.map((tech) => (
                  <span key={tech} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-links">
                {project.liveLink && (
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="link">
                    Live Demo →
                  </a>
                )}
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="link">
                  GitHub →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <h2>Skills</h2>
        <div className="skills-grid">
          {skills.map((skillGroup) => (
            <div key={skillGroup.category} className="skill-group">
              <h3>{skillGroup.category}</h3>
              <ul>
                {skillGroup.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <h2>Let's Connect</h2>
        <p>I'm always open to new opportunities and interesting conversations.</p>
        <div className="contact-links">
          <a href="mailto:your.email@example.com" className="contact-link">Email</a>
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="contact-link">GitHub</a>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="contact-link">LinkedIn</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 Frederick Morton. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
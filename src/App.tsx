
import './index.css'

const projects = [
  {
    number: '01',
    title: 'Procedural Terrain',
    category: 'Computer Graphics',
    description:
      'A voxel-based terrain generation and visualization project using C++ and OpenGL.',
    technologies: ['C++', 'OpenGL', 'Perlin Noise'],
    github: 'https://github.com/M1tri/ProceduralTerrainOpenGL',
  },
  {
    number: '02',
    title: 'Interactive Compression Visualizer',
    category: 'Software Development',
    description:
      'An interactive application for visualizing data compression algorithms and their execution.',
    technologies: ['Godot', 'GDScript'],
    github: '#',
  },
  {
    number: '03',
    title: 'SQL Query Classification',
    category: 'Machine Learning',
    description:
      'Experimenting with local language models for identifying and classifying SQL query errors.',
    technologies: ['Python', 'Ollama', 'Oracle SQL'],
    github: '#',
  },
]

const skills = [
  'C++',
  'C#',
  'Python',
  'JavaScript',
  'TypeScript',
  'React',
  'OpenGL',
  'Godot',
  'SQL',
  'Git',
]

function App() {
  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar">
        <a href="#home" className="logo">
          <span className="accent">D</span>.I.
        </a>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>

        <a href="#contact" className="nav-button">
          Let's talk <span>↗</span>
        </a>
      </nav>

      <main>
        {/* Hero */}
        <section id="home" className="hero">
          <div className="hero-content">
            <p className="eyebrow">
              <span className="status-dot" />
              AVAILABLE FOR OPPORTUNITIES
            </p>

            <h1>
              Hi, I'm <span className="accent">Dimitrije.</span>
              <br />
              I build things for
              <br />
              <span className="muted">the digital world.</span>
            </h1>

            <p className="hero-description">
              Computer Science student interested in software
              development, computer graphics and interactive
              applications.
            </p>

            <div className="hero-actions">
              <a href="#projects" className="primary-button">
                Explore my work <span>↓</span>
              </a>
              <a href="mailto:your-email@example.com" className="text-link">
                Get in touch ↗
              </a>
            </div>
          </div>

          <div className="hero-decoration">
            <div className="decoration-circle">
              <span>01</span>
              <span>BUILD</span>
              <span>CREATE</span>
              <span>EXPLORE</span>
            </div>
            <div className="decoration-cross">+</div>
          </div>

          <div className="hero-bottom">
            <span>BASED IN SERBIA</span>
            <span>SCROLL TO EXPLORE ↓</span>
            <span>© 2026</span>
          </div>
        </section>

        {/* About */}
        <section id="about" className="section">
          <p className="section-label">01 / ABOUT ME</p>

          <div className="about-content">
            <h2>
              Curious by nature.
              <br />
              <span className="muted">Developer by choice.</span>
            </h2>

            <div className="about-text">
              <p>
                I'm a Computer Science student with an interest
                in building software, exploring new technologies
                and understanding how things work under the hood.
              </p>
              <p>
                I enjoy working on projects that combine
                programming, problem-solving and creativity —
                from graphics programming to interactive tools.
              </p>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="section">
          <p className="section-label">02 / SELECTED WORK</p>

          <div className="section-heading">
            <h2>Things I've built.</h2>
            <span className="muted">A selection of my projects</span>
          </div>

          <div className="projects-list">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <span className="project-number">{project.number}</span>

                <div className="project-info">
                  <span className="project-category">
                    {project.category}
                  </span>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>

                  <div className="tech-list">
                    {project.technologies.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>
                </div>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="project-link"
                  aria-label={`View ${project.title} on GitHub`}
                >
                  ↗
                </a>
              </article>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="section">
          <p className="section-label">03 / TOOLKIT</p>

          <h2>Technologies I work with.</h2>

          <div className="skills-grid">
            {skills.map((skill) => (
              <div className="skill-item" key={skill}>
                <span className="accent">▹</span> {skill}
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="section contact-section">
          <p className="section-label">04 / GET IN TOUCH</p>

          <h2>
            Have a project
            <br />
            <span className="muted">in mind?</span>
          </h2>

          <p>
            I'm always open to interesting projects,
            collaborations and new opportunities.
          </p>

          <a
            href="mailto:your-email@example.com"
            className="primary-button"
          >
            Say hello <span>↗</span>
          </a>

          <div className="social-links">
            <a href="https://github.com/M1tri" target="_blank" rel="noreferrer">
              GitHub ↗
            </a>
            <a href="#" target="_blank" rel="noreferrer">
              LinkedIn ↗
            </a>
          </div>
        </section>
      </main>

      <footer>
        <span>© 2026 Dimitrije Ilić</span>
        <span>DESIGNED & BUILT WITH REACT</span>
        <a href="#home">BACK TO TOP ↑</a>
      </footer>
    </div>
  )
}

export default App


import "./App.css";

import {
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaCode,
} from "react-icons/fa";

import {
  SiDjango,
  SiReact,
  SiJavascript,
  SiMysql,
  
} from "react-icons/si";

function App() {
  return (
    <div className="portfolio">
      <nav className="navbar">
        <a className="logo" href="#home">DB.</a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#education">Education</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero" id="home">
        <p className="availability">
  <span className="status-dot"></span>
  OPEN TO ENTRY-LEVEL OPPORTUNITIES
</p>

<p className="intro">HELLO, I'M</p>
        <h1>Dattatraya Biradar<span>.</span></h1>
        <h2>Python Full Stack Developer</h2>

        <p className="description">
          I build modern web applications using Python, Django,
          React, and MySQL. I enjoy turning ideas into useful
          digital experiences.
        </p>

        
<div className="hero-buttons">
  <a className="btn primary" href="#projects">
    Explore My Work ↗
  </a>

  <a className="btn secondary" href="#contact">
    Contact Me
  </a>

  <a
    className="btn secondary"
    href="https://github.com/dattatrybiradar49-tech"
    target="_blank"
    rel="noreferrer"
  >
    GitHub ↗
  </a>

  <a
    className="btn secondary"
    href="https://www.linkedin.com/in/dattatraya-biradar-4a672b359/"
    target="_blank"
    rel="noreferrer"
  >
    LinkedIn ↗
  </a>

  
<a
  className="btn secondary"
  href="https://drive.google.com/file/d/1_lFDlwS0CFcDKHuTMflToVBDYvXI41bw/view?usp=sharing"
  target="_blank"
  rel="noreferrer"
>
  View Resume ↗
</a>

</div>

      </section>

      
<section className="content-section" id="about">
  <p className="section-label">GET TO KNOW ME</p>
  <h2>About Me</h2>

  <p>
    I am a Computer Science and Engineering graduate specializing in
    Artificial Intelligence and Machine Learning, currently gaining
    hands-on experience as a Python Full Stack Developer Intern.
  </p>

  <p>
    I work with Python, Django, React.js, and MySQL to build
    full-stack web applications. My technical skills include
    developing REST APIs, implementing CRUD operations, managing
    databases, and integrating frontend and backend components.
  </p>

  <p>
    I am passionate about solving problems, learning new technologies,
    and developing reliable, user-friendly applications. I am looking
    for opportunities to contribute to a software development team
    while continuing to grow as a developer.
  </p>
</section>


<section className="content-section" id="education">
  <p className="section-label">MY ACADEMIC BACKGROUND</p>
  <h2>Education</h2>

  <div className="education-card">
    <h3>Bachelor of Engineering (B.E.)</h3>
    <p className="education-degree">
      CSE (Specialization in AI & ML).
    </p>
    <p>Bheemanna Khandre Institute of Technology (BKIT)</p>
    <div className="education-meta">
      <span>2023 – 2026</span>
      <span>CGPA: 7.1</span>
    </div>
  </div>

  <div className="education-card">
    <h3>Diploma in Electronics and Communication Engineering</h3>
    <p>J.N. Polytechnic, Thanakushnoor</p>
    <div className="education-meta">
      <span>2020 – 2023</span>
      <span>CGPA: 8.3</span>
    </div>
  </div>
</section>



     
<section className="content-section" id="skills">
  <p className="section-label">MY TOOLKIT</p>
  <h2>Technical Skills</h2>

  <div className="skill-list">
    {[
      { name: "Python", icon: <FaPython /> },
      { name: "Django", icon: <SiDjango /> },
      { name: "React.js", icon: <SiReact /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "MySQL", icon: <SiMysql /> },
      { name: "REST APIs", icon: <FaCode /> },
      { name: "HTML5", icon: <FaHtml5 /> },
      { name: "CSS3", icon: <FaCss3Alt /> },
      { name: "Git", icon: <FaGitAlt /> },
    ].map((skill) => (
      <span className="skill" key={skill.name}>
        <span className="skill-icon">{skill.icon}</span>
        {skill.name}
      </span>
    ))}
  </div>
</section>


<section className="content-section" id="projects">
  <p className="section-label">WHAT I'VE BUILT</p>
  <h2>Featured Projects<span className="accent">.</span></h2>
  <p className="projects-intro">
    A selection of projects where I turn ideas into practical applications.
  </p>

  <div className="projects-grid">
    <article className="project-card">
      <div className="project-top">
        <span className="project-number">01</span>
        <span className="project-icon">⌘</span>
      </div>

      <p className="section-label">FULL STACK DEVELOPMENT</p>
      <h3>JobTrack</h3>
      <p>
        A job management application with authentication, job listings,
        and tools to manage job records.
      </p>

      <div className="project-tags">
        <span>React</span>
        <span>Django REST</span>
        <span>MySQL</span>
      </div>

      <a
        className="project-link"
        href="https://github.com/dattatrybiradar49-tech/JobTrack"
        target="_blank"
        rel="noreferrer"
      >
        View on GitHub ↗
      </a>
    </article>

    

    <article className="project-card">
      <div className="project-top">
        <span className="project-number">02</span>
        <span className="project-icon">◈</span>
      </div>

      <p className="section-label">DEEP LEARNING</p>
      <h3>Food Recognition & Calorie Estimation</h3>
      <p>
        A computer-vision project exploring food recognition
        and calorie estimation to support dietary decisions.
      </p>

      <div className="project-tags">
        <span>Python</span>
        <span>Deep Learning</span>
        <span>Computer Vision</span>
      </div>

      <a
        className="project-link"
        href="https://github.com/"
        target="_blank"
        rel="noreferrer"
      >
        View on GitHub ↗
      </a>
    </article>
  </div>
</section>


      <section className="content-section contact" id="contact">
        <p className="section-label">LET'S CONNECT</p>
        <h2>Have a project in mind?</h2>
        <p>I'm open to entry-level software development opportunities.</p>
        <a className="btn primary"
           href="https://mail.google.com/mail/?view=cm&fs=1&to=dattatrybiradar49@gmail.com"
           target="_blank"
           rel="noreferrer">
             Email Me
        </a>
      </section>

      <footer>
        © {new Date().getFullYear()} Dattatraya Biradar
      </footer>
    </div>
  );
}

export default App;

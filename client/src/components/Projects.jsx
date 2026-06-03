import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/projects")
      .then((res) => setProjects(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <section id="projects" className="section">
      <h2>My Projects</h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            className="project-card"
            key={project._id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <span>{project.tech}</span>

              <div className="project-links">
                <a href={project.liveLink || "#"} target="_blank" rel="noreferrer">
                  Live Demo
                </a>
                <a
                  href={project.githubLink || "#"}
                  target="_blank"
                  rel="noreferrer"
                  className="github-link"
                >
                  GitHub
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
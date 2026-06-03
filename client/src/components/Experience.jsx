import { motion } from "framer-motion";

function Experience() {
  return (
    <motion.section
      id="experience"
      className="section"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <h2>Experience</h2>

      <div className="timeline-card">
        <h3>Full Stack Development Intern</h3>
        <h4>Thiranex</h4>
        <span>June 2026 - Present</span>

        <p>
          Working on full-stack web applications using React.js, Node.js,
          Express.js and MongoDB. Building responsive interfaces, integrating
          REST APIs and managing database operations.
        </p>
      </div>
    </motion.section>
  );
}

export default Experience;
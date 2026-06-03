import { motion } from "framer-motion";

function About() {
  return (
    <motion.section
      id="about"
      className="section"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <h2>About Me</h2>
      <p>
        I am Sandeep Kumar SankaraGuptham, a passionate Full Stack Developer
        interested in building real-world web applications. I focus on clean UI,
        responsive design, backend APIs, database integration and solving
        practical problems using technology.
      </p>
    </motion.section>
  );
}

export default About;
import { motion } from "framer-motion";

function Education() {
  return (
    <motion.section
      id="education"
      className="section"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <h2>Education</h2>

      <div className="education-card">
        <h3>Bachelor of Technology</h3>
        <h4>Computer Science & Engineering</h4>
        <span>2023 - 2027</span>

        <p>
          Currently pursuing B.Tech with focus on Full Stack Development,
          Data Analytics, Machine Learning and Software Engineering.
        </p>
      </div>

      <div className="education-card">
        <h3>Intermediate</h3>
        <h4>MPC</h4>
        <span>2021 - 2023</span>

        <p>
          Completed intermediate education with Mathematics, Physics and
          Chemistry as core subjects.
        </p>
      </div>
    </motion.section>
  );
}

export default Education;
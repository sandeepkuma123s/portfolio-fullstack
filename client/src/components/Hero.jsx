import { motion } from "framer-motion";
import profile from "../assets/profile.jpg";
import resume from "../assets/resume/Sandeep_Resume.pdf";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";

function Hero() {
  return (
    <motion.section
      id="home"
      className="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p className="hello">Hello, I'm</p>
        <h1>Sandeep Kumar</h1>
        <h2>Full Stack Developer</h2>

        <p>
          Passionate Full Stack Developer skilled in React, Node.js,
          Express.js and MongoDB. I love building modern web applications
          and solving real-world problems through technology.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="primary-btn">
            View Projects <FiArrowRight />
          </a>

          <a href={resume} download className="secondary-btn">
            Download CV
          </a>
        </div>

        <div className="social-icons">
          <a href="#"><FaGithub /></a>
          <a href="#"><FaLinkedinIn /></a>
          <a href="#"><FaInstagram /></a>
        </div>
      </motion.div>

      <motion.div
        className="hero-image"
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9 }}
      >
        <img src={profile} alt="Sandeep Kumar" />
      </motion.div>
    </motion.section>
  );
}

export default Hero;
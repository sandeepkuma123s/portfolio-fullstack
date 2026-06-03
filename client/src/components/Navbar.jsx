import resume from "../assets/resume/Sandeep_Resume.pdf";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">SK</div>

      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <a href={resume} download className="cv-btn">Download CV</a>
    </nav>
  );
}

export default Navbar;
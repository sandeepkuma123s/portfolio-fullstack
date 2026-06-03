import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h2>Sandeep Kumar</h2>

        <p>
          Full Stack Developer | Python Developer | Data Analytics Enthusiast
        </p>

        <div className="footer-socials">
          <a href="#" target="_blank" rel="noreferrer"><FaGithub /></a>
          <a href="#" target="_blank" rel="noreferrer"><FaLinkedin /></a>
          <a href="#" target="_blank" rel="noreferrer"><FaInstagram /></a>
        </div>

        <hr />

        <p className="copyright">
          © 2026 Sandeep Kumar. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
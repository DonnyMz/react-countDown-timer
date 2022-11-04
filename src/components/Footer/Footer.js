import React, { useEffect } from "react";
import { FaInstagram, FaTwitter, FaLinkedinIn, FaReddit } from "react-icons/fa";
import "./footer.css";

const Footer = () => {
  const getCurrentYear = () => new Date().getFullYear();

  useEffect(() => {
    getCurrentYear();
  }, []);
  //   console.log(getCurrentYear());
  return (
    <>
      <footer className="footer">
        <section className="flex-footer">
          <span>Copyright&copy; {getCurrentYear()}</span>
          |&nbsp;
          <span>
            {" "}
            <a
              className="footer-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              JOJOCODE
            </a>
          </span>
          <span>
            <a
              className="footer-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={25} className="instagram" />
            </a>
          </span>
          <span>
            <a
              className="footer-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter size={25} color="#00acee" />
            </a>
          </span>
          <span>
            <a
              className="footer-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn size={25} className="linkedin" />
            </a>
          </span>
          <span>
            <a
              className="footer-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaReddit size={25} className="reddit" />
            </a>
          </span>
        </section>
      </footer>
    </>
  );
};

export default Footer;

import React from "react";

const Footer = () => {
  return (
    <footer className="footer p-10 bg-neutral text-neutral-content mt-24">
      <div>
        <span className="footer-title">Services</span>
        <a className="link link-hover">Branding</a>
      </div>
      <div>
        <span className="footer-title">Company</span>
        <a className="link link-hover">About Me</a>
        <a
          className="footer-title link link-hover"
          href="https://form.jotform.com/221593692553463"
          target="blank"
        >
          Contact
        </a>
        <a className="link link-hover">Jobs</a>
      </div>
      <div>
        <span className="footer-title">Legal</span>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </div>
    </footer>
  );
};

export default Footer;

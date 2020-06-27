import React from "react";
import "./Footer.css";

const Footer = () => (
  <>
    <footer>
      <div id="footer-wrapper">
        <p>
          <span>&copy;</span> Copyright by: Michał Czaboryk{" "}
          {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  </>
);

export default Footer;

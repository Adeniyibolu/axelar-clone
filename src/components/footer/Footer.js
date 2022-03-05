import React from "react";

const Footer = () => {
  return (
    <footer id="footer">
      <div>
        <div>
          <img src="https://axelar.network/wp-content/uploads/2021/06/Axelar-Logo-White.svg" />
          <p>Empowering developers to build scalable, multichain dApps</p>
          <div className="socials">
            <i className="fab fa-telegram"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-linkedin-in"></i>
            <i className="fab fa-youtube"></i>
          </div>
        </div>
        <div>
          <p>Learn</p>

          <ul>
            <li>White Paper</li>
            <li>Blog</li>
            <li>Raodmap</li>
            <li>Brand</li>
          </ul>
        </div>
        <div>
          <p>About</p>

          <ul>
            <li>Team</li>
            <li>Careers</li>
            <li>Resources</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div>
          <p>Ecosystem</p>

          <ul>
            <li>Community</li>
            <li>Partners</li>
          </ul>
        </div>
      </div>

      <p>© 2022 Axelar Network. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;

import React from "react";
import data from "../data";
import {
  FaLink,
  FaGithub,
  FaLinkedin,
  FaTwitterSquare,
  FaCoffee,
} from "react-icons/fa";

const Links = () => {
  return (
    <div className="container">
      {/* Card 1 */}
      <a className="btn btn-portfolio" target="_blank" href="https://sezersinanoglu.github.io">
        <div className="card">
          <div className="c-content">
            <div className="l-content">
              <FaLink />
            </div>
            <div className="r-content">
              <h3>My Portfolio</h3>
            </div>
          </div>
        </div>
      </a>
          {/* Card 2 */}
      <a id="github" className="btn light" target="_blank" href="https://github.com/sezersinanoglu">
        <div className="card">
          <div className="c-content">
            <div className="l-content">
              <FaGithub />
            </div>
            <div className="r-content">
              <h3>Github</h3>
            </div>
          </div>
        </div>
      </a>

      {/* Card 3 */}
      <a className="btn btn-linkedin" target="_blank" href="https://www.linkedin.com/in/sezer-sinano%C4%9Flu-35737a71/">
        <div className="card">
          <div className="c-content">
            <div className="l-content">
              <FaLinkedin />
            </div>
            <div className="r-content">
              <h3>Linkedin</h3>
            </div>
          </div>
        </div>
      </a>

      {/* Card 3 */}
      <a className="btn btn-twitter" target="_blank" href="#">
        <div className="card">
          <div className="c-content">
            <div className="l-content">
              <FaTwitterSquare />
            </div>
            <div className="r-content">
              <h3>Twitter</h3>
            </div>
          </div>
        </div>
      </a>

      {/* Card 4 */}
      <a className="btn btn-coffee" target="_blank" href="https://www.buymeacoffee.com/sezersinanoglu">
        <div className="card">
          <div className="c-content">
            <div className="l-content">
              <FaCoffee />
            </div>
            <div className="r-content">
              <h3>Buy my coffee</h3>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Links;

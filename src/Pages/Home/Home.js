import React from "react";
import "./Home.scss";
import photo1 from "../../Components/Photos/1.jpg";
import html from "../../Components/Photos/html.png";
import css from "../../Components/Photos/css-3.png";
import js from "../../Components/Photos/js.png";
import react from "../../Components/Photos/react.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  return (
    <div className="all">
      <section id="home">
        <div className="contaner">
          <div className="Left ">
            <h5 className="mb-3">Available for Freelance Work</h5>
            <h1 className="mb-3">
              Hi, I'm <span className="name"> Ahmed Adel</span>
            </h1>
            <h3 className="mb-3">Front-end Developer</h3>
            <p>
              Passionate and detail-oriented frontend developer with a strong
              foundation in HTML, CSS, and JavaScript. Committed to creating
              responsive and user-friendly web applications. Eager to leverage
              my skills in a dynamic team environment.
            </p>
            <div className="button">
              <button class="button-l b1 btn btn-primary  m-3">
                View My Work
              </button>
              <button class="button-r b2 btn btn-outline-secondary  m-3">
                Contact Me
              </button>
            </div>
            <h6 className=" mt-3">Tech I Work With :</h6>
            <div className="tools">
              <span className="html">
                {" "}
                <img className="icon" src={html} alt="" /> HTML{" "}
              </span>
              <span className="css">
                {" "}
                <img className="icon" src={css} alt="" /> CSS{" "}
              </span>
              <span className="js">
                {" "}
                <img className="icon" src={js} alt="" /> JS{" "}
              </span>
              <span className="react">
                {" "}
                <img className="icon" src={react} alt="" /> React{" "}
              </span>
            </div>
          </div>
          <div className="Right ">
            <img
              className="Image animate__animated animate__pulse"
              src={photo1}
              alt=""
            />
          </div>
        </div>
      </section>

      <section-2 id="about">
        <div className="hero_2">
          <h1 className="head">
            About <span className="me">Me</span>
          </h1>
          <span className="get">Get to know the person behind the code</span>
          <div className="shadow mt-5">
            <div className="about">
              <div className="left ">
                <div className="top">
                  <h1>Front-end Developer</h1>
                  <p>
                    I'm <span className="aad">Ahmed Adel</span>, a dedicated
                    developer with 1+ year of experience creating exceptional
                    digital solutions that blend aesthetics with functionality.
                    My journey in development has equipped me with expertise
                    across the entire stack, specializing in{" "}
                    <span className="aad">React</span> high-performance
                    applications.
                  </p>
                </div>
                <div className="down">
                  <h3>Development Philosophy</h3>
                  <div>
                    <p>
                      <span>✓</span> Clean, maintainable code as a foundation{" "}
                    </p>
                    <p>
                      <span>✓</span> Performance optimization from day one
                    </p>
                    <p>
                      <span>✓</span> Accessibility as a priority, not an
                      afterthought
                    </p>
                  </div>
                </div>
              </div>
              <div className="right ">
                <div className="top">
                  <h2>Personal Info</h2>
                  <div>
                    <div>
                      Name<p>Ahmed Adel</p>
                    </div>
                    <div>
                      Location<p>Cairo, Egypt</p>
                    </div>
                    <div>
                      Status<p>Open to opportunities</p>
                    </div>
                  </div>
                </div>
                <div className="down">
                  <h3>Current Focus</h3>
                  <p>
                    Expanding expertise in cloud architectures and advanced
                    React patterns
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section-2>

      <section id="skills">
        <div className="hero_3">
          <h2>My Skills</h2>
          <p className="head">
            I've worked with a variety of technologies in front-end development.
            Here are some of my key areas of expertise:
          </p>

          <div className="box">
            <div className="front">
              <div className="icon">
                <FontAwesomeIcon icon={faReact} />
              </div>
              <div className="info">
                <h3>Front-End Development</h3>
                <p>
                  Building responsive and optimized web applications with modern
                  frameworks.
                </p>

                <div className="tools">
                  <span className="html">
                    <i class="bi bi-filetype-html"></i> HTML
                  </span>
                  <span className="css">
                    <i class="bi bi-css"></i> CSS
                  </span>
                  <span className="js">
                    <i class="bi bi-javascript"></i> JS
                  </span>
                  <span className="react">
                    <FontAwesomeIcon icon={faReact} /> React
                  </span>
                </div>
              </div>
            </div>

            <div className="developer">
              <div className="icon">
                <i class="bi bi-tools"></i>
              </div>
              <div className="info">
                <h3>Development Tools</h3>
                <p>
                  Optimizing workflows with modern development and build tools.
                </p>

                <div className="tools">
                  <span className="css">
                    <i class="fa-regular fa-brackets-curly"></i>ESLint
                  </span>
                  <span className="js">
                    <i class="fa-brands fa-pinterest"></i> Prettier
                  </span>
                </div>
              </div>
            </div>

            <div className="git">
              <div className="icon">
                <i class="bi bi-git"></i>
              </div>
              <div className="info">
                <h3>Version Control & Deployment</h3>
                <p>
                  Managing code collaboration and deploying applications
                  efficiently.
                </p>

                <div className="tools">
                  <span className="html">
                    <i class="bi bi-git"></i> Git
                  </span>
                  <span className="css">
                    <i class="bi bi-github"></i> GitHub
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact">
        <h2>Let's Connect</h2>
        <p>
          Have a project in mind or want to discuss opportunities? I'm always
          open to talking about creative ideas and new projects.
        </p>
        <div>

          <div>
            <i class="bi bi-geo-alt"></i>
            <h5>Location</h5>
            <h6>Cairo, Egypt</h6>
          </div>

          <div>
            <i class="bi bi-envelope-at-fill"></i>
            <h5>Email</h5>
            <h6>Cairo, Egypt</h6>
          </div>

          <div>
            <i class="bi bi-telephone-fill"></i>
            <h5>Phone</h5>
            <h6>+20 1111299229</h6>
          </div>

        </div>

        <div className="social">
          <i class="bi bi-github"></i>
          <i class="bi bi-linkedin"></i>
          <i class="bi bi-whatsapp"></i>
        </div>

      </section>

      <section id="end">
        <p>© 2025 Ahmed Adel.</p>
      </section>

    </div>
  );
}

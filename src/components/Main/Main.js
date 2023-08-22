import React from "react";
import { Header } from "../Header/Header";
import { HeroHeader } from "../HeroHeader/HeroHeader";
import { Project } from "../Project/Project";
import { Footer } from "../Footer/Footer";
import ScrollableAnchor from "react-scrollable-anchor";
import ScrollAnimation from "react-animate-on-scroll";
import "./Main.css";

export class Main extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <HeroHeader />
        <ScrollableAnchor
          id={"about-section"}
          scrollDuration={2}
          keepLastAnchorHash={false}
        >
          <div className="about">
            <h2 className="title">
              <span className="first-letter">A</span>bout Me
            </h2>
            <div className="my-photo">
              <img src="./images/photo.jpg" alt="nastan eskandari"></img>
            </div>

            <h3>
              I am graduate of a high level Front-End Web Development Boot Camp
              In Iran. The program was a full time intensive 24 weeks with
              multiple assignments, teaching us the latest web development
              skills including HTML, CSS3, Sass, Bootstrap, Node.js, JavaScript,
              React, Redux toolkit and Ajax. I've always been passionate about
              art and design, and believe we are in this world to create. I'm
              looking for a web development position where I can continue to
              build amazing websites, improve my web development skills and be a
              member of a creative team.{" "}
            </h3>
          </div>
        </ScrollableAnchor>
        <Project />
        <ScrollableAnchor
          id={"skills-section"}
          scrollDuration={2}
          keepLastAnchorHash={false}
        >
          <ScrollAnimation animateIn="fadeIn" duration={1} animateOnce={true}>
            <div className="skills">
              {/* <h2 className="title">my Skills</h2>  */}
              <div className="skills_col">
                <div className="skills_col--skill darker">
                  <div className="skill-img bg-img">
                    <i className="fab fa-html5  fa-5x"></i>
                  </div>
                  <div className="skill-text  bg-text">
                    <p>HTML5</p>
                  </div>
                </div>
                <div className="skills_col--skill dark">
                  <div className="skill-img bg-img">
                    <i className="fab fa-css3-alt fa-5x"></i>
                  </div>
                  <div className="skill-text bg-text">
                    <p>CSS3</p>
                  </div>
                </div>
                <div className="skills_col--skill light">
                  <div className="skill-img bg-img">
                    <i className="fab fa-node-js  fa-5x"></i>
                  </div>
                  <div className="skill-text bg-text">
                    <p>NODEJS</p>
                  </div>
                </div>
                <div className="skills_col--skill darker">
                  <div className="skill-img bg-img">
                    <i className="fab fa-npm  fa-5x"></i>
                  </div>
                  <div className="skill-text bg-text">
                    <p>NPM</p>
                  </div>
                </div>
                <div className="skills_col--skill dark">
                  <div className="skill-img bg-img">
                    <i className="fab fa-react  fa-5x"></i>
                  </div>
                  <div className="skill-text bg-text">
                    <p>REACT</p>
                  </div>
                </div>
                <div className="skills_col--skill light">
                  <div className="skill-img bg-img">
                    <i className="fab fa-sass  fa-5x"></i>
                  </div>
                  <div className="skill-text bg-text">
                    <p>SASS</p>
                  </div>
                </div>
                <div className="skills_col--skill darker">
                  <div className="skill-img bg-img">
                    <i className="fab fa-js  fa-5x"></i>
                  </div>
                  <div className="skill-text bg-text">
                    <p>JavaScript</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </ScrollableAnchor>
        <Footer />
      </div>
    );
  }
}

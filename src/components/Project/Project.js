import React from "react";
import "./Project.css";
import ScrollAnimation from "react-animate-on-scroll";
import ScrollableAnchor from "react-scrollable-anchor";
import "../Main/animate.css";

let projects = [
  {
    title: "Online Shop",
    text: "This is an Online Shop project using React.JS, Redux toolkit,HTML5 and tailwind.",
    imgSrc: "./images/Online-shop.png",
    href: "https://github.com/neginfard/Online-Shop",
    btnText: "View In GitHub ",
  },

  {
    title: "Bootcamp Website",
    text: "This is a sample website. I just used HTML and Bootstrap to design a responsive website.",
    imgSrc: "./images/bootcamp.png",
    href: "https://github.com/neginfard/Bootstrap-responsive-website",
    btnText: "View In GitHub ",
  },
];
export class Project extends React.Component {
  render() {
    return (
      <div>
        <ScrollableAnchor
          id={"project-section"}
          scrollDuration={2}
          keepLastAnchorHash={false}
        >
          <div className="projects">
            <h2 className="title">
              <span className="first-letter">P</span>rojects
            </h2>
            {projects.map((project, i) => {
              return (
                <div className="project" key={i}>
                  <ScrollAnimation
                    animateIn="fadeInLeft"
                    duration={1}
                    animateOnce={true}
                    className="project_img--container"
                  >
                    <img src={project.imgSrc} alt="" />
                  </ScrollAnimation>
                  <ScrollAnimation
                    animateIn="fadeInRight"
                    duration={1}
                    animateOnce={true}
                    className="project_info"
                  >
                    <h2>{project.title}</h2>
                    <h3>{project.text}</h3>
                    <a
                      className="breathing-button"
                      rel="noopener noreferrer"
                      href={project.href}
                      target="_blank"
                    >
                      {project.btnText}
                    </a>
                  </ScrollAnimation>
                </div>
              );
            })}
          </div>
        </ScrollableAnchor>
      </div>
    );
  }
}

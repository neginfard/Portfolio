import React from "react";
import "./Footer.css";
// import ScrollAnimation from 'react-animate-on-scroll';
import ScrollableAnchor from "react-scrollable-anchor";
import Mailto from "react-protected-mailto";

export class Footer extends React.Component {
  render() {
    return (
      <div>
        <ScrollableAnchor
          id={"contact-section"}
          scrollDuration={2}
          keepLastAnchorHash={false}
        >
          <div className="footer">
            <nav className="footer_navbar">
              <h3 className="footer_navbar--title">Contact Info</h3>
              <div className="footer_navbar--social">
                <a
                  href="https://github.com/NeginFard"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fab fa-github fa-2x"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/negin-fard-09915a281/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fab fa-linkedin fa-2x"></i>
                </a>
              </div>
              <div className="footer_navbar--info">
                <p>
                  Email: <Mailto email="n.fard22@gmail.com" />
                </p>
              </div>
            </nav>
          </div>
        </ScrollableAnchor>
      </div>
    );
  }
}

import React from 'react';
import './Header.css';
// import ScrollAnimation from 'react-animate-on-scroll';
import ScrollableAnchor from 'react-scrollable-anchor';

export class Header extends React.Component{
    render(){
        return(
            <div>
                <ScrollableAnchor id={'home-section'} scrollDuration={2} keepLastAnchorHash={false}>
                    <div className="header">
                        <nav className="header_navbar">
                            <a href="#home-section" ><p>Home</p></a>
                            <a href="#about-section" ><p>About Me</p></a>
                            <a href="#project-section" ><p>Projects</p></a>
                            <a href="#skills-section" ><p>Skills</p></a>
                            <a href="#contact-section" ><p>Contact Me</p></a>
                        </nav>
                    </div>
                </ScrollableAnchor>
            </div>     
        )
    }
}
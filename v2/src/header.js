import React from "react";
import "./css/style.css";
import github_icon from "./static/github_icon.png";
import linkedin_icon from "./static/linkedin_icon.png";

class Header extends React.Component {
    render() {
        return (
            <div className="chad">
                <div className="nametag">
                    ERICH ELENDT
                </div>
                <div className="linkcontainer">
                    <a href="https://github.com/erich-e">
                        <img className="linkicon" src={github_icon} alt="github"/>
                    </a>
                    <a href="/about">
                        <div className="linkbox">
                            About
                        </div>
                    </a>
                    <a href="resume.pdf" download>
                        <div className="linkbox">
                            Resume
                            <img src="images/download-icon.png" alt=""/>
                        </div>
                    </a>
                    <a href="/projects">
                        <div className="linkbox">
                            Projects
                        </div>
                    </a>
                    <a href="https://www.linkedin.com/in/erich-elendt">
                        <img className="linkicon" src={linkedin_icon} alt="linkedin"/>
                    </a>
                </div>
            </div>
        );
    }
}

export default Header
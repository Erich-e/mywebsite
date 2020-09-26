import React from "react";
import { NavLink } from "react-router-dom";

import github_icon from "./static/github_icon.png";
import linkedin_icon from "./static/linkedin_icon.png";
import download_icon from "./static/download_icon.png";
class Header extends React.Component {
    render() {
        return (
            <div className="card header">
                <div className="nametag">
                    ERICH ELENDT
                </div>
                <div className="linkcontainer">
                    <a href="https://github.com/erich-e">
                        <img className="linkicon" src={github_icon} alt="github"/>
                    </a>
                    <NavLink to="/about">
                        <div className="linkbox">
                            About
                        </div>
                    </NavLink>
                    <a href="resume.pdf" download>
                        <div className="linkbox">
                            Resume &nbsp;
                            <img id="downloadicon" src={download_icon} alt=""/>
                        </div>
                    </a>
                    <NavLink to="/projects">
                        <div className="linkbox">
                            Projects
                        </div>
                    </NavLink>
                    <a href="https://www.linkedin.com/in/erich-elendt">
                        <img className="linkicon" src={linkedin_icon} alt="linkedin"/>
                    </a>
                </div>
            </div>
        );
    }
}

export default Header
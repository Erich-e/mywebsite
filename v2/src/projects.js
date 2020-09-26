import React from "react"

import github_icon from "./static/github_icon.png";

// A single project
class Project extends React.Component {
    render() {
        return (
            <div className="project">
                <img src={this.props.imageRef} alt=""/>
                <div className="projectcontent">
                    <h2>{this.props.title}</h2>
                    {this.props.description}
                    {this.props.linkRef.length > 0 && 
                        <a href={this.props.linkRef}>
                            <img className="projecticon" src="" alt="link"/>
                        </a>
                    }
                    {this.props.githubRef.length > 0 &&
                        <a href={this.props.githubRef}>
                            <img className="projecticon" src={github_icon} alt="github"/>
                        </a>
                    }
                </div>
            </div>
        );
    }
}

// Container for projects
class Projects extends React.Component {
    render() {
        console.log(this.props.projectList[0].title)
        return (
            <div className="card">
                {this.props.projectList.map ((item, index) => (
                    <Project
                        title={item.title}
                        imageRef={item.imageRef}
                        description={item.description}
                        linkRef={item.linkRef}
                        githubRef={item.githubRef}
                        key={index}/>
                ))}
            </div>
        );
    }
}

var myWebsite = {
    title: "title",
    imageRef: "imageRef",
    description: "description",
    linkRef: "linkRef",
    // githubRef: "girhubRef",
    githubRef: "",
};

var projectList = [
    myWebsite,
];

export default Projects;
export { projectList };
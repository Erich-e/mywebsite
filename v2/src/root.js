import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./header";
import About from "./about";
import Projects, { projectList } from "./projects";

import "./css/style.css";

class Root extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Header/>
                <Route exact path="/" component={About}/>
                <Route path="/about" component={About}/>
                <Route
                    path="/projects"
                    render={() => (
                        <Projects projectList={projectList}/>
                    )}/>
            </BrowserRouter>
        );
    }
}

export default Root;
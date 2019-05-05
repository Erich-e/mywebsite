import React from "react";
import Header from "./header";
import Router from "./router";

class Root extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Header/>
                <Router/>
            </React.Fragment>
        )
    }
}

export default Root;
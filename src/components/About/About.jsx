import React, { Component } from "react";
import { Link, Outlet } from "react-router-dom";

export default class About extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <>
                <h1>About</h1>
                <div>
                    <Link to="/about/values">Values</Link>
                    <Link to="/about/vision">Vision</Link>
                </div>

                <Outlet />
            </>
        );
    }
}

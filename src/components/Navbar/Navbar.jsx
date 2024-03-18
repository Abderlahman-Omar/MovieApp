import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
export default class Header extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <>
                <Navbar
                    expand="lg"
                    className="navbar  bg-dark border-bottom border-body "
                >
                    <Container>
                        <Navbar.Brand className="text-white" href="/home">
                            Movie App
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <NavLink
                                    to="/movies"
                                    className={({ isActive, isPending }) =>
                                        isActive
                                            ? "text-info text-decoration-none mx-3"
                                            : " text-white text-decoration-none  mx-3"
                                    }
                                >
                                    Movies
                                </NavLink>
                                <NavLink
                                    to="/favourites"
                                    className={({ isActive, isPending }) =>
                                        isActive
                                            ? "text-info text-decoration-none mx-3"
                                            : " text-white text-decoration-none mx-3"
                                    }
                                >
                                    Favourites
                                </NavLink>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>
        );
    }
}

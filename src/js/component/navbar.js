import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import "../../styles/navbar.scss";

// import { Context } from "../store/appContext";

export const Navbar = () => {
	// const { store, actions } = useContext(Context);

	return (
		<nav className="navbar">
			<Link to="/" className="navbar-title link">
				<span className="navbar-title text-light h1">Sergio Diaz Llobera</span>
			</Link>
			<div className="ml-auto-md">
				<Link to="/" className="link">
					<span className="navbar-link text-light h1">Home</span>
				</Link>
				<Link to="/about" className="link">
					<span className="navbar-link text-light h1">About</span>
				</Link>
				<Link to="/projects" className="link">
					<span className="navbar-link project-link text-warning h1">Projects</span>
				</Link>
			</div>
		</nav>
	);
};

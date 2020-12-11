import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import "../../styles/navbar.scss";

// import { Context } from "../store/appContext";

export const Navbar = () => {
	// const { store, actions } = useContext(Context);
	const [name, setName] = useState("SDL");
	const longName = () => setName("Sergio Diaz Llobera");
	const shortName = () => setName("SDL");
	return (
		<nav className="navbar px-0 mb-3">
			<Link to="/" className="navbar-title">
				<span className="navbar-title text-light h1" onMouseOver={longName} onMouseOut={shortName}>
					{name}
				</span>
			</Link>
			<div className="ml-auto-md">
				<Link to="/">
					<span className="navbar-link text-light h1">Home</span>
				</Link>
				<Link to="/about">
					<span className="navbar-link text-light h1">About</span>
				</Link>
				<Link to="/projects">
					<span className="navbar-link project-link text-warning h1">Projects</span>
				</Link>
			</div>
		</nav>
	);
};

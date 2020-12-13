import React from "react";
import { Link } from "react-router-dom";
import Typical from "react-typical";

import "../../styles/home.scss";

import sergioDiaz from "../../img/sergioDiaz.jpg";

export const Home = () => {
	return (
		<div className="home d-flex flex-column flex-md-row bg-dark text-white align-items-center justify-content-center my-auto">
			<div className="resp-container">
				<div className="profile-img-container ">
					<img className="col-md mx-auto profile-img" src={sergioDiaz} alt="Sergio Diaz Llobera" />
				</div>
				<div className="typical-container d-flex flex-column justify-content-center">
					<Typical steps={[1000, "Desarrollador Full-Stack.", 800]} className="typical " />{" "}
					<Typical
						steps={[3000, "Apasionado por los negocios y la tecnología.", 1000]}
						loop={1}
						wrapper="p"
						className="typical "
					/>{" "}
					<Typical
						steps={[6500, "Siempre en proceso de renovación.", 800]}
						loop={1}
						wrapper="p"
						className="typical "
					/>
				</div>
			</div>
			<div className="home-btns d-flex flex-row flex-md-column">
				<Link to="/about" className="about-btn order-md-2 btn btn-outline-secondary mt-md-3">
					About Me
				</Link>
				<Link to="/projects" className="btn order-md-1 btn-warning mt-3 mt-md-0">
					Projects
				</Link>
			</div>
		</div>
	);
};

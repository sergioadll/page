import React from "react";

import Typical from "react-typical";

import "../../styles/home.scss";

import sergioDiaz from "../../img/sergioDiaz.jpg";

export const Home = () => {
	return (
		<div className="d-flex flex-column flex-md-row bg-dark text-white align-items-center justify-content-center my-auto">
			<div className="profile-img-container bg-warning">
				<img className="col-md profile-img" src={sergioDiaz} alt="Sergio Diaz Llobera" />
			</div>
			<div className=" d-flex flex-column justify-content-center typical-container bg-primary">
				<Typical steps={[1000, "Desarrollador Full-Stack.", 800]} className="home-content " />{" "}
				<Typical
					steps={[3000, "Apasionado por los negocios y la tecnología.", 1000]}
					loop={1}
					wrapper="p"
					className="home-content "
				/>{" "}
				<Typical
					steps={[6500, "Siempre en proceso de renovación.", 800]}
					loop={1}
					wrapper="p"
					className="home-content "
				/>
			</div>
		</div>
	);
};

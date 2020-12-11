import React from "react";

import Typical from "react-typical";
import "../../styles/home.scss";

export const Home = () => {
	return (
		<div className="bg-dark text-white">
			<div>
				<Typical
					steps={[1000, "Desarrollador Full-Stack.", 800]}
					loop={1}
					wrapper="p"
					className="home-content "
				/>{" "}
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

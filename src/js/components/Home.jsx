import React from "react";
import { SecondsCounter } from "./SecondsCounter";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
//create your first component
const Home = ({ seconds }) => {
	let numeros = String(seconds).padStart(6, 0).split("")
	console.log(numeros);

	return (
		<div className="d-flex justify-content-center mt-5" id="contenedor">
			<SecondsCounter
				digito= <i className="fa-regular fa-clock"></i> />
			{
				numeros.map((value, index) => {
					return (
						<SecondsCounter digito={value} key={index} />
					)
				})
			}


		</div>



	);
};

export default Home;
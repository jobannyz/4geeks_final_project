import React from "react";
import { Tarjeta } from "../component/card";
import { Link, useParams } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../store/appContext";
import { Carousel } from "react-bootstrap";

import "../../styles/home.scss";

export const Home = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="container text-center mt-5">
			<div>
				<div>
					<h1 className="text-info fs-1">Party´s Services</h1>
					{/*<span>{store.token}</span>*/}
				</div>
				<Carousel>
					<Carousel.Item>
						<img
							src="https://s.ineventos.com/cr/2014/02/109412/catering-services-mk-202265-i-640w.jpg"
							height="400"
							width="1000"
							alt="First slide"
						/>
						<Carousel.Caption>
							<h3>Catering Service</h3>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item>
						<img
							src="http://ideasdeeventos.com/wp-content/uploads/2014/12/decoracion-de-fiestas-corporativas-tipo-coctel.jpg"
							height="400"
							width="1000"
							alt="Second slide"
						/>

						<Carousel.Caption>
							<h3>Eventos Temáticos</h3>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item>
						<img
							className=""
							src="https://retroversion.es/wp-content/uploads/2018/04/Claves-para-contratar-a-un-DJ-para-bodas-fiestas-o-eventos-1.png"
							height="400"
							width="1000"
							alt="Third slide"
						/>
						<Carousel.Caption>
							<h3>DJ</h3>
						</Carousel.Caption>
					</Carousel.Item>
				</Carousel>

				<div>
					<h1 className="text-info fs-1">Paquetes Disponibles</h1>
				</div>

				<div className="d-flex justify-content-between">
					{store.services.map((item, index) => (
						<Tarjeta key={index} id={index} service={item} />
					))}
				</div>
			</div>
		</div>
	);
};

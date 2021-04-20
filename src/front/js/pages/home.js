import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../store/appContext";

import { Carousel, Card, Button } from "react-bootstrap";

import "../../styles/home.scss";

export const Home = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="container text-center mt-5">
			<div>
				<div>
					<h1 className="text-info fs-1">Party´s Services</h1>
					<span>{store.token}</span>
				</div>
				<Carousel>
					<Carousel.Item>
						<img
							className=""
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
							className=""
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
					<Card style={{ width: "18rem" }}>
						<Card.Img
							variant="top"
							src="https://static.smalljoys.me/2020/07/2527082_cumplea%C3%B1os-123_1594326555.jpg"
							height="180"
							width="180"
						/>
						<Card.Body>
							<Card.Title>
								<h2>Paquete Básico</h2>
							</Card.Title>
							<Card.Text>
								<p>Precio por persona: ₡8000</p>
								<p> </p>
							</Card.Text>
							<Card.Footer>
								<Link to="/servicios">
									<Button variant="primary">Detalles del paquete</Button>
								</Link>
							</Card.Footer>
						</Card.Body>
					</Card>

					<Card style={{ width: "18rem" }}>
						<Card.Img
							variant="top"
							src="https://los40.com.mx/los40/imagenes/2020/05/14/viral/1589472767_937131_1589472952_gigante_normal.jpg"
							height="180"
							width="180"
						/>
						<Card.Body>
							<Card.Title>
								<h2>Paquete Regular (recomendado)</h2>
							</Card.Title>
							<Card.Text>
								<p>Precio por persona: ₡12000</p>
							</Card.Text>
							<Card.Footer>
								<Link to="/servicios">
									<Button variant="primary">Detalles del paquete</Button>
								</Link>
							</Card.Footer>
						</Card.Body>
					</Card>

					<Card style={{ width: "18rem" }}>
						<Card.Img
							variant="top"
							src="https://i.pinimg.com/originals/59/c5/71/59c5717786d39984730049e70682133e.jpg"
							height="180"
							width="180"
						/>
						<Card.Body>
							<Card.Title>
								<h2>Paquete Premium</h2>
							</Card.Title>
							<Card.Text>
								<p>Precio por persona: ₡18000</p>
							</Card.Text>
							<Card.Footer>
								<Link to="/servicios">
									<Button variant="primary">Detalles del paquete</Button>
								</Link>
							</Card.Footer>
						</Card.Body>
					</Card>
				</div>
			</div>
		</div>
	);
};

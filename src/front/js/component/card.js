import React from "react";
import { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Card, Button } from "react-bootstrap";

export const Tarjeta = props => {
	const { store, actions } = useContext(Context);
	return (
		<Card style={{ width: "18rem" }}>
			<Card.Img
				variant="top"
				src="https://static.smalljoys.me/2020/07/2527082_cumplea%C3%B1os-123_1594326555.jpg"
				height="180"
				width="180"
			/>
			<Card.Body>
				<Card.Title>
					<h2>{props.service.name}</h2>
				</Card.Title>
				<Card.Text>Precio por persona: ₡{props.service.precio}</Card.Text>
				<Card.Footer>
					<Link to={`/service/${props.id}`}>
						<Button variant="primary">Detalles del paquete</Button>
					</Link>
				</Card.Footer>
			</Card.Body>
		</Card>
	);
};
Tarjeta.propTypes = {
	service: PropTypes.object,
	id: PropTypes.number
};

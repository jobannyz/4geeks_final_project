import React from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Button } from "react-bootstrap";

export const ServiceInfo = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
		<>
			<div className="card-header bg-white">
				{store.services.length > 0 && (
					<>
						<h1>{store.services[params.theid].name}</h1>
						<p>{store.services[params.theid].precio}</p>
						<p>{store.services[params.theid].catering_service}</p>
						<p>{store.services[params.theid].decoracion}</p>
						<p>{store.services[params.theid].dj}</p>
					</>
				)}
			</div>
			<Button variant="primary" onClick={() => actions.addFavorite(event, store.services[params.theid].name)}>
				Agregar al Carrito
			</Button>
		</>
	);
};

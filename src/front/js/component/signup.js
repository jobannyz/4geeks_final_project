import React, { useState, useEffect, useContext } from "react";
import { Link, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { Button, Modal, Form } from "react-bootstrap";

export function SignUp() {
	const { store, actions } = useContext(Context);
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const [email, setEmail] = useState("");
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [address, setAddress] = useState("");
	const [auth, setAuth] = useState(false);

	const handleSubmit = event => {
		event.preventDefault();
		actions.signup_user(email, username, password, address);
		setAuth(true);
	};

	return (
		<>
			<Button className="m-3" variant="danger" onClick={handleShow}>
				Regístrese
			</Button>

			<Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
				<Modal.Header closeButton>
					<Modal.Title>Ingrese la información solicitada para registarse como usuario</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form onSubmit={event => handleSubmit(event)}>
						<Form.Group controlId="formBasicEmail">
							<Form.Label>Dirección de email</Form.Label>
							<Form.Control
								type="email"
								placeholder="Ingrese su email"
								value={email}
								onChange={event => setEmail(event.target.value)}
							/>
						</Form.Group>
						<Form.Group>
							<Form.Label>Nombre de Usuario</Form.Label>
							<Form.Control
								type="text"
								placeholder="Ingrese su nombre de usuario"
								value={username}
								onChange={event => setUsername(event.target.value)}
							/>
						</Form.Group>
						<Form.Group controlId="formBasicPassword">
							<Form.Label>Contraseña</Form.Label>
							<Form.Control
								type="password"
								placeholder="Contraseña"
								value={password}
								onChange={event => setPassword(event.target.value)}
							/>
						</Form.Group>
						<Form.Group>
							<Form.Label>Dirección de domicilio</Form.Label>
							<Form.Control
								type="text"
								placeholder="Ingrese la dirección de su domicilio"
								value={address}
								onChange={event => setAddress(event.target.value)}
							/>
						</Form.Group>
						<Button className="m-3" variant="secondary" onClick={handleClose}>
							Cerrar
						</Button>
						<Button className="m-3" variant="primary" type="submit" onClick={handleClose}>
							Continuar
						</Button>
					</Form>
					{auth ? <Redirect to="/" /> : null}
				</Modal.Body>
			</Modal>
		</>
	);
}

import React, { useState, useEffect, useContext } from "react";
import { Link, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { Button, Modal, Form } from "react-bootstrap";

export function Login_user() {
	const { store, actions } = useContext(Context);
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [auth, setAuth] = useState(false);

	const handleSubmit = event => {
		event.preventDefault();
		actions.login_user(username, password);
		setAuth(true);
	};

	return (
		<>
			<Button className="m-3" variant="primary" onClick={handleShow}>
				Iniciar Sesión
			</Button>

			<Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
				<Modal.Header closeButton>
					<Modal.Title>Ingrese su nombre de usuario y contraseña</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form onSubmit={event => handleSubmit(event)}>
						<Form.Group>
							<Form.Label>Nombre de usuario</Form.Label>
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

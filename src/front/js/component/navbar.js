import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Image, Nav, DropdownButton, Dropdown } from "react-bootstrap";
import { Login_user } from "../component/login";
import { SignUp } from "../component/signup";

export const Navbar_main = () => {
	return (
		<Navbar>
			<Navbar.Brand>
				<Link to="/">
					<Image src="https://image.flaticon.com/icons/png/512/34/34859.png" height="60" alt="party" />
				</Link>
			</Navbar.Brand>

			<Nav className="mr-auto">
				<Link className="nav-link" to="/servicios">
					Servicios
				</Link>
				<Link className="nav-link" to="/acerca">
					Acerca de nosotros
				</Link>
				<Link className="nav-link" to="/contacto">
					Contáctanos
				</Link>
			</Nav>
			<Nav classname="mr-sm-2">
				<Login_user />
				<SignUp />
			</Nav>

			<DropdownButton id="dropdown-basic-button" title={<i className="fas fa-shopping-cart" />} />
		</Navbar>
	);
};

import { NavLink } from "react-router-dom";

export default function Navbar() {
	return (
		<nav className="navbar">
			<NavLink to="/">Home</NavLink>
			<NavLink to="/about">About</NavLink>
			<NavLink to="/products">Products</NavLink>
			<NavLink to="/login">Login</NavLink>
		</nav>
	)
}
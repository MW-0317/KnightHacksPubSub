import logo from "../images/logo.png";
import "./Navbar.css";

const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg">
			<center>
				<a className="navbar-brand" href="#">
					<img src={logo} alt="logo" className="logo" />
				</a>
			</center>
		</nav>
	);
};

export default Navbar;

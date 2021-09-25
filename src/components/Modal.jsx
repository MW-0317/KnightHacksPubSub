import Checkbox from "./Checkbox";
import Input from "./Input";
import "./Modal.css";
import Button from "./Button";

const Modal = ({ show, closeModal }) => {
	const subData = [
		"Publix Chicken Tender Sub",
		`Boar's Head® Jerk Turkey & Gouda Sub`,
		"Publix Ham Sub",
		"Publix Turkey Sub",
		"Publix Homestyle Beef Meatball Sub",
		"Publix Italian Sub",
		"Publix Ultimate Sub",
	];

	const showScreenTwo = () => {
		document.getElementById("screen-two").style.display = "block";
		document.getElementById("screen-one").style.display = "none";
	};

	const resetScreens = () => {
		document.getElementById("screen-one").style.display = "block";
		document.getElementById("screen-two").style.display = "none";
	};

	return (
		<div className={"modal " + (show ? "show" : "hide")} id="modal">
			<div className="modal-content" id="screen-one">
				<p className="text-center">
					Enter your name and phone number to get notifications about
					your favorite PubSubs
				</p>
				<Input type="text" placeholder="Name" name="name" />
				<Input type="text" placeholder="Phone Number" name="phone" />

				{subData.map((sub, index) => {
					return <Checkbox key={index} label={sub} />;
				})}

				<div className="modal-footer">
					<Button
						title="Cancel"
						color="#ff0000"
						text="white"
						onClick={closeModal}
					/>
					<Button
						title="Notify Me"
						color="#43902e"
						text="white"
						onClick={showScreenTwo}
					/>
				</div>
			</div>
			<div className="modal-content hide" id="screen-two">
				<p className="text-center">
					We have sent a verification code to your phone number.
					Please enter the code below to verify your phone number.
				</p>
				<Input
					type="text"
					placeholder="Verification Code"
					name="code"
				/>
				<div className="modal-footer">
					<Button
						title="Cancel"
						color="#ff0000"
						text="white"
						onClick={() => {
							resetScreens();
							closeModal();
						}}
					/>
					<Button title="Verify" color="#43902e" text="white" />
				</div>
			</div>
		</div>
	);
};

export default Modal;

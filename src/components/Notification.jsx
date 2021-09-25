import { useState } from "react";
import Button from "./Button";
import Modal from "./Modal";
import "./Notification.css";

const Notification = () => {
	const [modalState, setModalState] = useState(false);

	const showModal = () => {
		setModalState(true);
	};

	const hideModal = () => {
		setModalState(false);
	};

	return (
		<>
			<div className="notification">
				<div className="notification__content">
					<p>
						Want to get notified when your favorite PubSubs are
						available?
					</p>
					<p>
						Subcsribe to our site using your phone number and
						receive instant notifications when your favorite PubSubs
						are available.
					</p>
					<Button title="Subscribe" onClick={showModal} />
				</div>
			</div>
			<Modal show={modalState} closeModal={hideModal} />
		</>
	);
};

export default Notification;

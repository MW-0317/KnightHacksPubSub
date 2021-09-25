import "./Button.css";

const Button = ({ title, color, text, onClick }) => {
	let textColor = "black";
	if (text) {
		textColor = text;
	}

	return (
		<div className="button">
			<button
				style={{ backgroundColor: color, color: textColor }}
				onClick={onClick ?? null}
			>
				{title}
			</button>
		</div>
	);
};

export default Button;

import "./Input.css";

const Input = ({ type, placeholder, name, value }) => {
	return (
		<div className="input-container">
			<input
				type={type}
				placeholder={placeholder}
				name={name}
				value={value}
			/>
		</div>
	);
};

export default Input;

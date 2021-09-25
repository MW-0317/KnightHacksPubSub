import "./Checkbox.css";

const Checkbox = ({ name, value, label }) => {
	return (
		<div style={{ width: "100%" }}>
			<input type="checkbox" name={name} value={value} />
			&nbsp;&nbsp;{label}
		</div>
	);
};

export default Checkbox;

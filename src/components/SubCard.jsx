import "./SubCard.css";
import { useEffect, useState } from "react";
import ultimate1 from "../images/ultimate1.png";
import ultimate2 from "../images/ultimate2.png";
import Chip from "./Chip";

const SubCard = () => {
	const [subImage, setSubImage] = useState(ultimate1);

	// days between two dates
	function getDaysLeft(date1, date2) {
		var diffTime = Math.abs(date2 - date1);
		const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

		return diffDays;
	}

	// get current date
	var today = new Date();
	var saleEnd = new Date("2021-09-26");

	var daysLeft = getDaysLeft(today, saleEnd);

	useEffect(() => {
		const timer = setInterval(() => {
			if (subImage == ultimate1) {
				setSubImage(ultimate2);
			} else {
				setSubImage(ultimate1);
			}
		}, 500);
		return () => clearTimeout(timer);
	}, [subImage]);

	return (
		<div className="sub-card">
			<div className="sub-card-image">
				<img src={subImage} alt="" />
			</div>
			<div className="sub-card-content">
				<div className="sub-card-title">
					Publix Deli Ultimate Whole Sub
				</div>
				<div className="sub-card-description">
					<p>
						Roast Beef, Tavern Ham, Turkey, Cheese, and Choice of
						Toppings
					</p>
					<p className="price-space">
						<span className="price">$ 5.99</span>
					</p>
					<p>Available from 9/23 - 9/26</p>
					<p className="text-danger">
						{daysLeft} {daysLeft > 1 ? "days" : "day"} left for sale
					</p>
					<Chip name={"Sale"} />
				</div>
			</div>
		</div>
	);
};

export default SubCard;

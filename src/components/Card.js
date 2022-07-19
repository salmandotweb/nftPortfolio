import React from "react";
import classes from "../styles/Portfolio.module.css";
const Card = () => {
	return (
		<div className={classes.card}>
			<img src="assets/shoaib.png" alt="Shoaib" />
			<div className={classes.card_info}>
				<h1>Shoaib Akthar</h1>
				<h4>Rawalpindi</h4>
				<p>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam
					modi,voluptatibus nisi sequi soluta eaque esse reprehenderit voluptas
					hic assumenda tenetur pariatur unde nihil eveniet quasi facere ipsam
					perspiciatis nemo?
				</p>
			</div>
		</div>
	);
};

export default Card;

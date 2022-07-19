import React from "react";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import SectionTitle from "../components/SectionTitle";
import classes from "../styles/Portfolio.module.css";

const portfolio = () => {
	return (
		<div>
			<Navbar classname="otherNavbar" />
			<div className={`backgrounds ${classes.portfolioPage}`}>
				<img src="assets/events-blob.svg" alt="Blob" className="blob" />
				<img src="assets/stripes.svg" alt="Blob" className="stripes" />
				<div className={classes.content}>
					<SectionTitle sectionName="Events" />
					<div className={classes.cardsContainer}>
						<Card />
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default portfolio;

import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import SectionTitle from "../components/SectionTitle";
import classes from "../styles/EventsPage.module.css";
import Footer from "../components/Footer";

const EventCard = ({
	classname,
	img,
	title,
	subtitle,
	description,
	upcoming,
	btn,
}) => (
	<div className={`${classes[classname]} ${classes.eventCard}`}>
		<div className={classes.info}>
			<div className={classes.header}>
				<h2>{subtitle}</h2>
				<p>{upcoming}</p>
			</div>
			<h1>{title}</h1>
			<p>{description}</p>
			<div className={classes.btnContainer}>
				<Link to="/" className={classes.btn}>
					Learn More
				</Link>
				<Link to="/" className={classes.btn}>
					<a>{btn}</a>
				</Link>
			</div>
		</div>
		<div className={classes.img}>
			<img src={img} alt="Events" />
		</div>
	</div>
);

const events = () => {
	return (
		<>
			<Navbar classname="otherNavbar" logo="assets/miniLogo.svg" />
			<div className={`backgrounds ${classes.eventsPage}`}>
				<img src="assets/events-blob.svg" alt="Blob" className="blob" />
				<img src="assets/stripes.svg" alt="Blob" className="stripes" />
				<div className={classes.content}>
					<SectionTitle sectionName="Events" />
					<EventCard
						img="assets/events1.png"
						title="Launch Party"
						subtitle="Inauguration"
						btn="Download PDF"
						description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et eum commodi dolore excepturi, ea obcaecati tempore ut. Sapiente harum hic aut nesciunt eveniet iure, saepe suscipit blanditiis, obcaecati eum pariatur."
					/>
					<EventCard
						classname="reverse"
						upcoming="Upcoming Event"
						img="assets/events2.png"
						title="Re-Imagined"
						subtitle="Future"
						description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et eum commodi dolore excepturi, ea obcaecati tempore ut. Sapiente harum hic aut nesciunt eveniet iure, saepe suscipit blanditiis, obcaecati eum pariatur."
					/>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default events;

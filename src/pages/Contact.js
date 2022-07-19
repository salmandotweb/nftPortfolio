import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import SectionTitle from "../components/SectionTitle";
import classes from "../styles/Contact.module.css";

const Contact = () => {
	return (
		<>
			<Navbar classname="otherNavbar" logo="assets/miniLogo.svg" />
			<div className={`backgrounds ${classes.contactPage}`}>
				<img src="assets/events-blob.svg" alt="Blob" className="blob" />
				<img src="assets/stripes.svg" alt="Blob" className="stripes" />
				<div className={classes.content}>
					<SectionTitle sectionName="Get in Touch" />
					<form className={classes.form}>
						<div className={classes.header}></div>
					</form>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Contact;

import React from "react";
import SectionTitle from "../components/SectionTitle";
import TeamCard from "../components/TeamCard";
import classes from "../styles/Team.module.css";
import { motion } from "framer-motion";
import useScrollAnimation from "../customHooks/useScrollAnimation";
import { parent } from "../animations/animations";

const Team = () => {
	const [ref, animation] = useScrollAnimation();
	return (
		<motion.section
			className={classes.teamSection}
			ref={ref}
			variants={parent}
			initial="hidden"
			animate={animation}>
			<SectionTitle section="Our" sectionName="Team" />
			<img src="assets/blob-1.svg" alt="blob" className={classes.blob} />
			<motion.div className={classes.cardsContainer}>
				<TeamCard img="assets/teamImage.jpg" name="Muzna Ibrahim" />
				<TeamCard img="assets/teamImage-2.jpg" name="Shahrukh Sadi" />
				<TeamCard img="assets/teamImage-3.jpg" name="Hassan Farooq" />
				<TeamCard img="assets/teamImage-4.jpg" name="Rashid Jamal" />
			</motion.div>
		</motion.section>
	);
};

export default Team;

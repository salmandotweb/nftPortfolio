import { Link } from "react-router-dom";
import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import classes from "../styles/Team.module.css";
import { motion } from "framer-motion";
import { children } from "../animations/animations";

const TeamCard = ({ img, name }) => {
	return (
		<motion.div className={classes.teamCard} variants={children}>
			<div className={classes.teamImage}>
				<img src={img} alt="Team Member" />
			</div>
			<div className={classes.teamInfo}>
				<h3>{name}</h3>
				<div className={classes.socialLinks}>
					<Link to="/">
						<AiOutlineInstagram />
					</Link>
					<Link to="/">
						<TiSocialLinkedinCircular />
					</Link>
				</div>
			</div>
		</motion.div>
	);
};

export default TeamCard;

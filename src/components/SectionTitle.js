import React from "react";
import useScrollAnimation from "../customHooks/useScrollAnimation";
import { motion } from "framer-motion";
import classes from "../styles/SectionTitle.module.css";
import { sectionTitle } from "../animations/animations";

const SectionTitle = ({ section, sectionName }) => {
	const [ref, animation] = useScrollAnimation();
	return (
		<div className={classes.sectionTitle}>
			<motion.h1
				ref={ref}
				animate={animation}
				variants={sectionTitle}
				initial="hidden">
				{section}
				<motion.span variants={sectionTitle}>{sectionName}</motion.span>
			</motion.h1>
		</div>
	);
};

export default SectionTitle;

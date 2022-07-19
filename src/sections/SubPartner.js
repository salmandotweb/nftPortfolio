import React from "react";
import { BiChevronRight } from "react-icons/bi";
import SectionTitle from "../components/SectionTitle";
import classes from "../styles/Partners.module.css";
import { motion } from "framer-motion";
import useScrollAnimation from "../customHooks/useScrollAnimation";
import { children, parent } from "../animations/animations";

const SubCard = ({ img, description }) => (
	<motion.div className={classes.subCard} variants={children}>
		<img src={img} alt="Partner" />
		{/* <p>{description}</p>
		<a href="/" className={classes.learnMore}>
			Learn More <BiChevronRight />
		</a> */}
	</motion.div>
);

const SubPartner = () => {
	const [ref, animation] = useScrollAnimation();
	return (
		<section className={classes.subPartnerSection}>
			<SectionTitle section="Strategic" sectionName="Partner" />
			<motion.div
				className={classes.cardsContainer}
				ref={ref}
				variants={parent}
				animate={animation}
				initial="hidden">
				<SubCard
					img="assets/checkmate.svg"
					description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non, aliquet tristique nisi, dictumst 
                    cursus sed eget quis. Mus aliquet vel, porttitor elit egestas a. Dolor dui, sed ac, auctor potenti lacus."
				/>
				<SubCard
					img="assets/Blockpix.svg"
					description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non, aliquet tristique nisi, dictumst 
                    cursus sed eget quis. Mus aliquet vel, porttitor elit egestas a. Dolor dui, sed ac, auctor potenti lacus."
				/>
				<SubCard
					img="assets/BR.svg"
					description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non, aliquet tristique nisi, dictumst 
                    cursus sed eget quis. Mus aliquet vel, porttitor elit egestas a. Dolor dui, sed ac, auctor potenti lacus."
				/>
			</motion.div>
		</section>
	);
};

export default SubPartner;

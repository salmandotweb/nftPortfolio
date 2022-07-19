import React from "react";
import useScrollAnimation from "../customHooks/useScrollAnimation";
import classes from "../styles/Header.module.css";
import { motion } from "framer-motion";
import { children, parent } from "../animations/animations";

const Header = () => {
	const [ref, animation] = useScrollAnimation();
	return (
		<motion.div className={classes.header} ref={ref}>
			<motion.div
				className={classes.content}
				variants={parent}
				initial="hidden"
				animate={animation}>
				<motion.h1 variants={children}>
					<motion.span variants={children}>Immerse Into</motion.span>
					<motion.span variants={children}>The Metaverse</motion.span>
				</motion.h1>
				<motion.p variants={children}>
					Enabling celebrities in the NFT and metaverse revolution.
				</motion.p>
			</motion.div>
		</motion.div>
	);
};

export default Header;

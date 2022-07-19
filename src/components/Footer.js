import React from "react";
import { GrFacebookOption } from "react-icons/gr";
import { AiOutlineInstagram } from "react-icons/ai";
import { RiYoutubeFill } from "react-icons/ri";
import { FiTwitter } from "react-icons/fi";
import { FaTiktok } from "react-icons/fa";
import { SiMedium } from "react-icons/si";
import classes from "../styles/Footer.module.css";
import { Link } from "react-router-dom";
import useScrollAnimation from "../customHooks/useScrollAnimation";
import { motion } from "framer-motion";
import { children, parent } from "../animations/animations";

const Footer = () => {
	const date = new Date();
	const year = date.getFullYear();
	const [ref, animation] = useScrollAnimation();
	return (
		<motion.footer
			className={classes.footer}
			ref={ref}
			animate={animation}
			initial="hidden"
			variants={parent}>
			<motion.img variants={children} src="/assets/Logo.svg" alt="Logo" />
			<motion.div className={classes.linksContainer}>
				<motion.div className={classes.links} variants={parent}>
					<Link to="/">
						<motion.div variants={children}>
							<GrFacebookOption className={classes.icon} />
						</motion.div>
					</Link>
					<Link to="/">
						<motion.div variants={children}>
							<AiOutlineInstagram className={classes.icon} />
						</motion.div>
					</Link>
					<Link to="/">
						<motion.div variants={children}>
							<RiYoutubeFill className={classes.icon} />
						</motion.div>
					</Link>
					<Link to="/">
						<motion.div variants={children}>
							<FiTwitter className={classes.icon} />
						</motion.div>
					</Link>
					<Link to="/">
						<motion.div variants={children}>
							<FaTiktok className={classes.icon} />
						</motion.div>
					</Link>
					<Link to="/">
						<motion.div variants={children}>
							<SiMedium className={classes.icon} />
						</motion.div>
					</Link>
				</motion.div>
				<motion.p variants={children}>
					©{year} MetAsia Celebs. All rights reserved
				</motion.p>
			</motion.div>
		</motion.footer>
	);
};

export default Footer;

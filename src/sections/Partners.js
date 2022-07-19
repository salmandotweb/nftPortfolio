import React from "react";
import { HiChevronRight } from "react-icons/hi";
import SectionTitle from "../components/SectionTitle";
import useScrollAnimation from "../customHooks/useScrollAnimation";
import { motion } from "framer-motion";
import classes from "../styles/Partners.module.css";
import {
	children,
	image,
	imageContainer,
	parent,
	service,
	trial,
	trialPath,
} from "../animations/animations";

const Partners = () => {
	const [ref, animation] = useScrollAnimation();
	return (
		<section className={classes.partnersSection}>
			<SectionTitle section="Our" sectionName="Partners" />

			<motion.svg
				className={classes.object}
				width="257"
				height="771"
				viewBox="0 0 257 771"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				variants={trial}
				ref={ref}
				animate={animation}
				initial="hidden">
				<motion.path
					variants={trialPath}
					d="M-275.883 24.1446C-176.926 -11.698 -67.7841 -6.7622 27.5335 37.8663C122.851 82.4948 196.536 163.16 232.379 262.117C268.221 361.074 263.285 470.216 218.657 565.533C174.029 660.851 93.3631 734.536 -5.59362 770.379L-140.738 397.262L-275.883 24.1446Z"
					fill="url(#paint0_linear_0_14)"
				/>
				<defs>
					<linearGradient
						id="paint0_linear_0_14"
						x1="54.7435"
						y1="718.224"
						x2="144.656"
						y2="212.917"
						gradientUnits="userSpaceOnUse">
						<stop stop-color="white" stop-opacity="0.08" />
						<stop offset="1" stop-color="#35068C" stop-opacity="0.01" />
					</linearGradient>
				</defs>
			</motion.svg>

			<motion.div className={classes.content} ref={ref}>
				<motion.div className={classes.left}>
					<motion.div
						className={classes.leftContent}
						variants={parent}
						animate={animation}
						initial="hidden">
						<motion.img
							src="assets/trustvibes.svg"
							alt="TrustVibes"
							variants={children}
						/>
						<motion.h1 className={classes.heading} variants={children}>
							Exclusive <span>Tech Partner</span>
						</motion.h1>
						<motion.p variants={children}>
							TrustVIbes provides creator-centric tools and technology for
							musicians and artist to succeed in the metaverse and NFT
							revolution.
						</motion.p>
						<motion.a
							href="/"
							className={classes.learnMore}
							variants={children}>
							Learn More <HiChevronRight />
						</motion.a>
					</motion.div>
				</motion.div>
				<div className={classes.right}>
					<motion.div
						className={classes.imageContainer}
						variants={imageContainer}
						animate={animation}
						initial="hidden">
						<motion.img
							src="assets/partner.png"
							alt="Partner"
							variants={image}
						/>
					</motion.div>
				</div>
			</motion.div>
		</section>
	);
};

export default Partners;

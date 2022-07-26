import React from "react";
import SectionTitle from "../components/SectionTitle";
import classes from "../styles/Services.module.css";
import Service from "../components/ServiceCard";
import { motion } from "framer-motion";
import { trial, trialPath } from "../animations/animations";
import useScrollAnimation from "../customHooks/useScrollAnimation";

const Services = () => {
	const [ref, animation] = useScrollAnimation();

	return (
		<section className={classes.servicesSection} id="services">
			<SectionTitle section="Our" sectionName="Services" />
			<img src="assets/blob.svg" alt="blog" className={classes.blob} />

			<motion.svg
				className={classes.object}
				width="499"
				height="830"
				viewBox="0 0 499 830"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				variants={trial}
				ref={ref}
				animate={animation}
				initial="hidden">
				<motion.path
					variants={trialPath}
					d="M299.992 829.659C192.582 796.594 102.706 722.213 50.136 622.882C-2.4338 523.55 -13.391 407.403 19.6749 299.992C52.7407 192.582 127.121 102.706 226.453 50.1358C325.785 -2.43391 441.931 -13.3911 549.342 19.6747L499.472 181.672C435.026 161.832 365.338 168.407 305.739 199.948C246.139 231.49 201.511 285.416 181.672 349.862C161.832 414.309 168.407 483.997 199.948 543.596C231.49 603.195 285.416 647.823 349.862 667.663L299.992 829.659Z"
					fill="url(#paint0_linear_0_17)"
				/>
				<defs>
					<linearGradient
						id="paint0_linear_0_17"
						x1="464.369"
						y1="25.3459"
						x2="62.8308"
						y2="398.338"
						gradientUnits="userSpaceOnUse">
						<stop offset="0.0625" stop-color="white" stop-opacity="0.08" />
						<stop offset="1" stop-color="white" stop-opacity="0" />
					</linearGradient>
				</defs>
			</motion.svg>
			<div className={classes.servicesContainer}>
				<svg
					className={classes.trial}
					width="948"
					height="1304"
					viewBox="0 0 948 1304"
					fill="none"
					xmlns="http://www.w3.org/2000/svg">
					<path
						d="M893.676 297.704C894.064 298.436 894.973 298.713 895.704 298.325C896.436 297.936 896.713 297.027 896.325 296.296L893.676 297.704ZM129.461 0.500263C124.971 0.584296 120.1 1.14204 114.974 2.14041L115.548 5.08507C120.534 4.11391 125.23 3.57998 129.518 3.49974L129.461 0.500263ZM87.2789 10.876C78.7442 14.515 70.0655 19.058 61.6605 24.4205L63.274 26.9496C71.5395 21.6761 80.0719 17.2102 88.4555 13.6356L87.2789 10.876ZM38.6218 42.0171C31.4495 48.575 24.8837 55.8177 19.2968 63.6739L21.7416 65.4125C27.1911 57.7495 33.6109 50.6638 40.6462 44.2311L38.6218 42.0171ZM5.71332 89.3804C2.49041 98.4179 0.629574 107.995 0.50649 118.032L3.50626 118.069C3.62503 108.384 5.41982 99.1348 8.53902 90.3881L5.71332 89.3804ZM4.86042 146.8C7.54552 155.369 11.534 164.164 17.0002 173.146L19.5629 171.586C14.2123 162.794 10.3295 154.221 7.72318 145.903L4.86042 146.8ZM34.2972 196.489C37.3589 199.991 40.6526 203.515 44.1877 207.059L46.3119 204.941C42.8208 201.44 39.5721 197.964 36.5555 194.515L34.2972 196.489ZM44.1877 207.059C47.9078 210.789 52.1568 214.129 56.893 217.111L58.4913 214.572C53.9255 211.698 49.8571 208.495 46.3119 204.941L44.1877 207.059ZM86.3341 229.734C95.8312 232.456 106.288 234.507 117.583 235.983L117.971 233.008C106.79 231.547 96.4847 229.523 87.1608 226.85L86.3341 229.734ZM149.442 238.62C159.651 239.053 170.346 239.17 181.465 239.021L181.425 236.021C170.352 236.17 159.714 236.053 149.569 235.623L149.442 238.62ZM213.192 237.969C223.499 237.448 234.089 236.76 244.922 235.935L244.694 232.944C233.883 233.767 223.319 234.454 213.041 234.973L213.192 237.969ZM276.618 233.225C287.004 232.251 297.566 231.187 308.274 230.058L307.959 227.074C297.26 228.203 286.71 229.265 276.338 230.238L276.618 233.225ZM339.898 226.601C350.334 225.428 360.877 224.217 371.499 222.99L371.155 220.01C360.534 221.236 349.995 222.447 339.562 223.62L339.898 226.601ZM403.086 219.339C413.57 218.132 424.105 216.93 434.668 215.752L434.335 212.771C423.768 213.949 413.229 215.151 402.743 216.358L403.086 219.339ZM466.25 212.33C476.793 211.226 487.339 210.166 497.865 209.169L497.582 206.182C487.045 207.18 476.489 208.242 465.937 209.347L466.25 212.33ZM529.518 206.374C540.136 205.511 550.708 204.733 561.209 204.061L561.017 201.067C550.498 201.741 539.908 202.519 529.275 203.384L529.518 206.374ZM592.933 202.363C603.628 201.912 614.219 201.595 624.678 201.437L624.633 198.438C614.144 198.596 603.526 198.913 592.806 199.366L592.933 202.363ZM656.423 201.474C667.181 201.675 677.759 202.079 688.124 202.714L688.307 199.719C677.896 199.082 667.276 198.676 656.479 198.475L656.423 201.474ZM719.699 205.464C730.438 206.702 740.884 208.244 750.995 210.124L751.543 207.175C741.358 205.281 730.843 203.729 720.043 202.483L719.699 205.464ZM781.74 217.215C792.228 220.159 802.237 223.57 811.71 227.495L812.858 224.723C803.263 220.748 793.14 217.299 782.551 214.327L781.74 217.215ZM839.859 241.705C848.971 247.279 857.359 253.536 864.948 260.538L866.982 258.334C859.238 251.188 850.69 244.814 841.424 239.146L839.859 241.705ZM885.485 284.194C888.437 288.49 891.17 292.99 893.676 297.704L896.325 296.296C893.766 291.482 890.974 286.884 887.958 282.495L885.485 284.194Z"
						fill="#E64523"
						variants={trialPath}
					/>
					<path
						d="M905 527C879 887 208 588.999 208 877"
						stroke="#E64523"
						stroke-width="3"
						stroke-dasharray="31 31"
						variants={trialPath}
					/>
					<path
						d="M183 1065C183 1181 385 1229 545 1139C763 1016.38 933 1167 891 1303"
						stroke="#E64523"
						stroke-width="3"
						stroke-dasharray="31 31"
						variants={trialPath}
					/>
				</svg>

				<Service
					img="assets/service-1.png"
					title="Verified NFT Publisher"
					description="We provide NFT consulting and verified publishing services for Celebrities, Artist, Brands in the South Asian Region. We offer a partner program to help our portfolio clients throughout their NFT journey."
				/>
				<Service
					classname={classes.reverse}
					img="assets/service-2.png"
					title="NFT PR & Sales"
					description="Our 360 solution provides strategic marketing and NFT sales services, our NFT sales specialist will work with you in maximizing the outcomes of your NFT campaigns and to successfully create a new revenue stream."
				/>
				<Service
					img="assets/service-3.png"
					title="Metaverse Events"
					description="The Metaverse is changing and evolving at a fast pace, harness the possibilities of Metaverse Concerts with a truly immersive experience through our metaverse events."
				/>
				<Service
					classname={classes.reverse}
					img="assets/service-4.png"
					title="Hybrid Events"
					description="Our Hybrid event lets you experience the best of both worlds, connect virtually with global audience while being present at the actual event at the same time."
				/>
			</div>
		</section>
	);
};

export default Services;

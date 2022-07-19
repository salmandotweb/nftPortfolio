import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as Scroll from "react-scroll";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoCloseSharp } from "react-icons/io5";
import classes from "../styles/Navbar.module.css";
import useScrollAnimation from "../customHooks/useScrollAnimation";
import { motion } from "framer-motion";
import { parent, children } from "../animations/animations";

const ToolTip = () => <div className={classes.tooltip}>Coming Soon!!!</div>;

const Navbar = ({ classname, logo }) => {
	const [show, setShow] = useState(false);
	const Links = Scroll.Link;
	const [ref, animation] = useScrollAnimation();
	return (
		<motion.nav
			className={` ${classes[classname]} ${classes.navbar}`}
			ref={ref}
			variants={parent}
			initial="hidden"
			animate={animation}>
			<motion.div className={classes.logo} variants={children}>
				<Link to="/">
					<img src={logo} alt="logo" />
				</Link>
			</motion.div>
			<motion.ul
				ref={ref}
				variants={parent}
				initial="hidden"
				animate={animation}
				className={
					show ? `${classes.navLinks} ${classes.mobileMenu}` : classes.navLinks
				}>
				<motion.li className={classes.link} variants={children}>
					<Link to="/">
						<a onClick={() => setShow(false)}>Home</a>
					</Link>
				</motion.li>
				<motion.li className={classes.link} variants={children}>
					<Links to="services" spy={true}>
						<a onClick={() => setShow(false)}>Services</a>
					</Links>
				</motion.li>
				<motion.li className={classes.link} variants={children}>
					{/* <Link to="/events"> */}
					<a onClick={() => setShow(false)}>
						Events <ToolTip />
					</a>
					{/* </Link> */}
				</motion.li>
				<motion.li className={classes.link} variants={children}>
					{/* <Link to="/"> */}
					<a onClick={() => setShow(false)}>
						NFTs <ToolTip />
					</a>
					{/* </Link> */}
				</motion.li>
				<motion.li className={classes.link} variants={children}>
					{/* <Link to="/portfolio"> */}
					<a onClick={() => setShow(false)}>
						Portfolio <ToolTip />
					</a>
					{/* </Link> */}
				</motion.li>
				<motion.li className={classes.link} variants={children}>
					{/* <Link to="/contact"> */}
					<a onClick={() => setShow(false)}>
						Get in Touch <ToolTip />
					</a>
					{/* </Link> */}
				</motion.li>
			</motion.ul>
			<button
				className={
					show ? `${classes.menuBtn} ${classes.mobileMenuBtn}` : classes.menuBtn
				}
				onClick={() => setShow(!show)}>
				{show ? <IoCloseSharp /> : <HiMenuAlt3 />}
			</button>
		</motion.nav>
	);
};

export default Navbar;

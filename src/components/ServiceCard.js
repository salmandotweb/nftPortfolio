import { motion } from "framer-motion";
import { children, parent, service } from "../animations/animations";
import useScrollAnimation from "../customHooks/useScrollAnimation";
import classes from "../styles/Services.module.css";

const Service = ({ classname, title, description, img }) => {
	const [ref, animation] = useScrollAnimation();
	return (
		<motion.div
			className={`${classname} ${classes.service}`}
			ref={ref}
			variants={parent}
			initial="hidden"
			animate={animation}>
			<motion.img src={img} alt="service" variants={children} />
			<motion.div className={classes.content} variants={parent}>
				<motion.h1 variants={children}>{title}</motion.h1>
				<motion.p variants={children}>{description}</motion.p>
			</motion.div>
		</motion.div>
	);
};
export default Service;

import Header from "../sections/Header";
import Navbar from "../components/Navbar";
import classes from "../styles/Home.module.css";
import Services from "../sections/Services";
import Team from "../sections/Team";
import Partners from "../sections/Partners";
import SubPartner from "../sections/SubPartner";
import Footer from "../components/Footer";

export default function Home() {
	return (
		<div>
			<div className={classes.homePage}>
				<Navbar logo="assets/Logo.svg" />
				<Header />
				<Services />
				<Team />
				<Partners />
				<SubPartner />
				<Footer />
			</div>
		</div>
	);
}

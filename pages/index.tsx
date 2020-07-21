import Header from '../components/Header';
import Presentation from '../components/Presentation';
import Services from '../components/Services';
import Equipments from '../components/Equipments';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const index = () => {
	return (
		<main>
			<Header />
			<Presentation />
			<Services />
			<Equipments />
			<Contact />
			<Footer />
		</main>
	);
};

export default index;

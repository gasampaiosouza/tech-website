import Header from '../components/Header';
import Presentation from '../components/Presentation';
import Services from '../components/Services';
import Equipments from '../components/Equipments';
import Contact from '../components/Contact';

const index = () => {
	return (
		<main>
			<Header />
			<Presentation />
			<Services />
			<Equipments />
			<Contact />
		</main>
	);
};

export default index;

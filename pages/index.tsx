import Header from '../components/Header';
import Presentation from '../components/Presentation';
import Services from '../components/Services';
import Equipments from '../components/Equipments';

const index = () => {
	return (
		<main>
			<Header />
			<Presentation />
			<Services />
			<Equipments />
		</main>
	);
};

export default index;

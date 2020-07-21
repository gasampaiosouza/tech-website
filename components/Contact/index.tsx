import style from './style.module.scss';

import OpeningHours from './OpeningHours';
import ContactData from './ContactData';
import Form from './Form';
import Message from './Message';

const Contact: React.FC = () => {
	return (
		<section className={style.container}>
			<div className={style.content}>
				<OpeningHours />
				<Message />
				<ContactData />
				<Form />
			</div>
		</section>
	);
};

export default Contact;

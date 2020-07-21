import style from './style.module.scss';

import OpeningHours from './OpeningHours';
import Form from './Form';

const Contact: React.FC = () => {
	return (
		<section className={style.container}>
			<div className={style.content}>
				<OpeningHours />
				<div className={style.message}>message</div>
				<div className={style.contato}>contato</div>
				<Form />
			</div>
		</section>
	);
};

export default Contact;

import style from './style.module.scss';

import OpeningHours from './OpeningHours';
import Form from './Form';

const Contact: React.FC = () => {
	return (
		<section className={style.container}>
			<div className={style.content}>
				<OpeningHours />
				<div className={style.message}>message</div>
				<div className={style.contact}>
					<div className={style.email}>
						<p className={style.title}>Precisa de ajuda?</p>
						<span className={style.data}>supertechbsb@gmail.com</span>
					</div>

					<div className={style.phone}>
						<p className={style.title}>Anote nosso telefone</p>
						<span className={style.data}>(61) 99591-0125</span>
					</div>
				</div>
				<Form />
			</div>
		</section>
	);
};

export default Contact;

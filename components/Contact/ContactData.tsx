import style from './style.module.scss';
import Fade from 'react-reveal/Fade';

const Contact: React.FC = () => {
	return (
		<Fade left cascade>
			<div className={style.contact}>
				<div className={style.email}>
					<p className={style.title}>Need help?</p>
					<span className={style.data}>company@example.com</span>
				</div>

				<div className={style.phone}>
					<p className={style.title}>Write down our phone</p>
					<span className={style.data}>+55 (11) 4002-8922</span>
				</div>
			</div>
		</Fade>
	);
};

export default Contact;

import style from './style.module.scss';

const Contact: React.FC = () => {
	return (
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
	);
};

export default Contact;

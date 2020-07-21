import style from './style.module.scss';

const Contact: React.FC = () => {
	return (
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
	);
};

export default Contact;

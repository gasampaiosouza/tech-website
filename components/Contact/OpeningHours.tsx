import style from './style.module.scss';

const Contact: React.FC = () => {
	const days = [
		{
			day: 'Segunda à Quinta',
			time: '9:00 - 19:00',
		},
		{
			day: 'Sábado',
			time: '9:00 - 14:00',
		},
	];

	return (
		<div className={style.opening}>
			<p className={style.title}>Nossos horários de funcionamento:</p>
			{days.map((item) => (
				<div className={style['opening-box']}>
					<h2 className={style['opening-box-title']}>{item.day}</h2>
					<p>{item.time}</p>
				</div>
			))}
		</div>
	);
};

export default Contact;

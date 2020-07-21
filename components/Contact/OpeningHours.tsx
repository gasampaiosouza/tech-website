import style from './style.module.scss';
import Fade from 'react-reveal/Fade';

const Contact: React.FC = () => {
	const days = [
		{
			day: 'Monday to Thursday',
			time: '9:00 - 19:00',
		},
		{
			day: 'Saturday',
			time: '9:00 - 14:00',
		},
	];

	return (
		<Fade left cascade>
			<div className={style.opening}>
				<p className={style.title}>Our opening hours:</p>
				{days.map((item, i) => (
					<div className={style['opening-box']} key={i}>
						<h2 className={style['opening-box-title']}>{item.day}</h2>
						<p>{item.time}</p>
					</div>
				))}
			</div>
		</Fade>
	);
};

export default Contact;

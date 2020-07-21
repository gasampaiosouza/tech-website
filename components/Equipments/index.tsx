import style from './style.module.scss';

const Equipments: React.FC = () => {
	return (
		<div className={style.container}>
			<img
				src="https://imgur.com/fgwEyqs.png"
				className="icon"
				alt="equipments"
			/>

			<div className={style.content}>
				<h1 className="title">Our equipments</h1>

				<p className={`description ${style.description}`}>
					We work with any type of equipment, including the modern ones! Like
					<span>desktop</span>, <span>notebooks</span>, <span>printers</span>{' '}
					and <span>video-games</span>!
				</p>
			</div>
		</div>
	);
};

export default Equipments;

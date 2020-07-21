import style from './style.module.scss';
// https://imgur.com/a/6aIdKV0

const Services: React.FC = () => {
	return (
		<div className={style.container}>
			<img
				src="https://imgur.com/8eYakLA.png"
				className="icon"
				alt="services"
			/>

			<div className={style.content}>
				<h1 className="title">Company services</h1>

				<p className={`description ${style.description}`}>
					We from Company work hard to solve the variety of our customers
					problems. Like <span>maintence</span>, <span>formatting</span> and{' '}
					<span>cleaning</span> your <span>electronics</span>, we help you with{' '}
					<span>xerox</span> and you’re always welcome to our{' '}
					<span>Lan House</span>!
				</p>
			</div>
		</div>
	);
};

export default Services;

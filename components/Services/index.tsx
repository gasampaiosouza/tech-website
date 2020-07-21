import style from './style.module.scss';
import Fade from 'react-reveal/Fade';

const Services: React.FC = () => {
	return (
		<div className={style.container} id="services">
			<Fade left>
				<img
					src="https://imgur.com/8eYakLA.png"
					className="icon"
					alt="services"
				/>
			</Fade>

			<Fade right cascade>
				<div className={style.content}>
					<h1 className="title">Company services</h1>

					<p className={`description ${style.description}`}>
						We from Company work hard to solve the variety of our customers
						problems. Like <span>maintence</span>, <span>formatting</span> and{' '}
						<span>cleaning</span> your <span>electronics</span>, we help you
						with <span>xerox</span> and you’re always welcome to our{' '}
						<span>Lan House</span>!
					</p>
				</div>
			</Fade>
		</div>
	);
};

export default Services;

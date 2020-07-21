import style from './style.module.scss';
import Fade from 'react-reveal/Fade';

const Presentation: React.FC = () => {
	return (
		<div className={style.container}>
			{/* <Fade right> */}
			<h1 className="title">Welcome to Company!</h1>
			{/* </Fade> */}

			{/* <Fade left> */}
			<p className={`description ${style.description}`}>
				Company is a tech company that helps you in a looot of things, like{' '}
				<span>maintence</span>, <span>formatting</span>, <span>cleanings</span>,
				and <span>xerox</span>. Always trying to help you with anything you
				need!
			</p>
			{/* </Fade> */}

			{/* <Fade bottom> */}
			<button className="btn">I am interested</button>
			{/* </Fade> */}
		</div>
	);
};

export default Presentation;

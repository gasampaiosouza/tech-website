import style from './style.module.scss';
import Fade from 'react-reveal/Fade';

const Presentation: React.FC = () => {
	return (
		<div className={style.container} id="home">
			<h1 className="title">
				Welcome to Com<span>pany</span>!
			</h1>

			<p className={`description ${style.description}`}>
				Company is a tech company that helps you in a looot of things, like{' '}
				<span>maintence</span>, <span>formatting</span>, <span>cleanings</span>,
				and <span>xerox</span>. Always trying to help you with anything you
				need!
			</p>

			<button className="btn">I am interested</button>
		</div>
	);
};

export default Presentation;

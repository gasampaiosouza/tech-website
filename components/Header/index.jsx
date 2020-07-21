import style from './style.module.scss';
import Panel from './Panel';

const Navbar = () => {
	return (
		<header className={style.header}>
			<div className="logo">Company</div>
			<Panel />
		</header>
	);
};

export default Navbar;

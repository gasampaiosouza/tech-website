import style from './style.module.scss';
import { useState } from 'react';

const RightNav = () => {
	const [open, setOpen] = useState(false);

	const burger = () => (
		<div
			className={`burger burger-slide ${open && 'open'}`}
			onClick={() => setOpen(!open)}
		>
			<div className="burger-lines"></div>
		</div>
	);

	return (
		<>
			{burger()}

			<ul
				className={`${style['nav-list']} ${
					open ? style.disappear : style.appear
				}`}
			>
				<a href="#">
					<li>Home</li>
				</a>
				<a href="#">
					<li>Services</li>
				</a>
				<a href="#">
					<li>Equipments</li>
				</a>
				<a href="#">
					<li>Contact</li>
				</a>
				<a href="#">
					<li>Opening hours</li>
				</a>
			</ul>
		</>
	);
};

export default RightNav;

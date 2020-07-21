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
				<a href="#home" onClick={() => setOpen(!open)}>
					<li>Home</li>
				</a>
				<a href="#services" onClick={() => setOpen(!open)}>
					<li>Services</li>
				</a>
				<a href="#equipments" onClick={() => setOpen(!open)}>
					<li>Equipments</li>
				</a>
				<a href="#contact" onClick={() => setOpen(!open)}>
					<li>Contact</li>
				</a>
				<a href="#contact" onClick={() => setOpen(!open)}>
					<li>Opening hours</li>
				</a>
			</ul>
		</>
	);
};

export default RightNav;

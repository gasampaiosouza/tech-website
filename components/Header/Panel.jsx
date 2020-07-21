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
					<li>Início</li>
				</a>
				<a href="#">
					<li>Serviços</li>
				</a>
				<a href="#">
					<li>Equipamentos</li>
				</a>
				<a href="#">
					<li>Contato</li>
				</a>
				<a href="#">
					<li>Horários</li>
				</a>
			</ul>
		</>
	);
};

export default RightNav;

import style from './style.module.scss';

const Footer: React.FC = () => {
	return (
		<footer className={style.container}>
			<div className={`${style['footer-company']} ${style.section}`}>
				<h1 className={`${style.title} ${style.logo} logo`}>Company</h1>
				<p className={`${style.description} description`}>
					This company is a tech focused company. We can help you with any
					electronic equipment.
				</p>
			</div>

			<div className={`${style['footer-links']} ${style.section}`}>
				<h1 className={`${style.title}`}>Links</h1>
				<ul>
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
						<li>Opening hours</li>
					</a>
					<a href="#">
						<li>Contact</li>
					</a>
				</ul>
			</div>

			<div className={`${style['footer-contact']} ${style.section}`}>
				<h1 className={`${style.title}`}>Contact</h1>
				<ul>
					<li>
						<i className={`fas fa-map-marker-alt ${style.icon}`}></i>
						<p>Glory Street - LA</p>
					</li>

					<li>
						<i className={`fas fa-envelope ${style.icon}`}></i>
						<p>company@example.com</p>
					</li>

					<li>
						<i className={`fab fa-instagram ${style.icon}`}></i>
						<p>@coolcompany</p>
					</li>

					<li>
						<i className={`fas fa-phone-alt ${style.icon}`}></i>
						<p>+55 (11) 4002-8922</p>
					</li>
				</ul>
			</div>

			<p className={style.copyright}>©2020 Copyright: Company.com</p>
		</footer>
	);
};

export default Footer;

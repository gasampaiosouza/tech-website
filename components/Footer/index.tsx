import style from './style.module.scss';
import Fade from 'react-reveal/Fade';

const Footer: React.FC = () => {
	return (
		<footer className={style.container}>
			<div className={`${style['footer-company']} ${style.section}`}>
				<Fade top>
					<h1 className={`${style.title} ${style.logo} logo`}>Company</h1>
				</Fade>
				<Fade bottom>
					<p className={`${style.description} description`}>
						This company is a tech focused company. We can help you with any
						electronic equipment.
					</p>
				</Fade>
			</div>

			<div className={`${style['footer-links']} ${style.section}`}>
				<Fade top>
					<h1 className={`${style.title}`}>Links</h1>
				</Fade>
				<ul>
					<Fade bottom cascade>
						<a href="#home">
							<li>Home</li>
						</a>
						<a href="#services">
							<li>Services</li>
						</a>
						<a href="#equipments">
							<li>Equipments</li>
						</a>
						<a href="#contact">
							<li>Opening hours</li>
						</a>
						<a href="#contact">
							<li>Contact</li>
						</a>
					</Fade>
				</ul>
			</div>

			<div className={`${style['footer-contact']} ${style.section}`}>
				<Fade top>
					<h1 className={`${style.title}`}>Contact</h1>
				</Fade>
				<Fade bottom cascade>
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
				</Fade>
			</div>

			<Fade top>
				<p className={style.copyright}>©2020 Copyright: Company.com</p>
			</Fade>
		</footer>
	);
};

export default Footer;

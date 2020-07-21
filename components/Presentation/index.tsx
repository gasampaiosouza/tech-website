import style from './style.module.scss';

const Presentation: React.FC = () => {
	return (
		<div className={style.container}>
			<h1 className="title">Bem-vindo à SuperTech!</h1>

			<p className={`description ${style.description}`}>
				A SuperTech é uma empresa de informática que te ajuda em muuuuita coisa,
				como <span>manutenções</span>, <span>formatações</span>,{' '}
				<span>limpezas</span>, e <span>xerox</span>. Tentando sempre te ajudar
				com o que você precisar!
			</p>

			<button className="btn">Tenho interesse</button>
		</div>
	);
};

export default Presentation;

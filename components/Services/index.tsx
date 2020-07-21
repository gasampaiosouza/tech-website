import style from './style.module.scss';

const Services: React.FC = () => {
	return (
		<div className={style.container}>
			<div className={`${style.icon} icon`}></div>

			<div className={style.content}>
				<h1 className="title">Os Serviços da SuperTech</h1>

				<p className={`description ${style.description}`}>
					Nós da SuperTech trabalhamos muito para resolver os variados problemas
					dos nossos clientes. Como <span>manutenção</span>,{' '}
					<span>formatação</span> e <span>limpeza</span> do seu eletrônico,
					fazemos <span>xerox</span>, temos <span>Lan House</span> e verificamos
					seu <span>SPC / Serasa</span>.
				</p>
			</div>
		</div>
	);
};

export default Services;

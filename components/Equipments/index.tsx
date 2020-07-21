import style from './style.module.scss';
// https://imgur.com/a/6aIdKV0

const Equipments: React.FC = () => {
	return (
		<div className={style.container}>
			<img
				src="https://imgur.com/fgwEyqs.png"
				className="icon"
				alt="equipments"
			/>

			<div className={style.content}>
				<h1 className="title">Nossos equipamentos</h1>

				<p className={`description ${style.description}`}>
					Trabalhamos com todos os tipos de equipamentos, incluindo os mais
					modernos! Como desktop, notebooks, impressoras e video-games!
				</p>
			</div>
		</div>
	);
};

export default Equipments;

import style from './style.module.scss';

const Contact: React.FC = () => {
	return (
		<form className={style.form}>
			<div className={style['form-name']}>
				<label htmlFor="name">Nome</label>
				<input
					className={style.input}
					type="text"
					id="name"
					required
					maxLength={35}
				/>
			</div>

			<textarea
				placeholder="Envie sua mensagem aqui..."
				className={style.input}
				required
			></textarea>

			<button className="btn">Enviar</button>
		</form>
	);
};

export default Contact;

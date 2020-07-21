import style from './style.module.scss';

const Contact: React.FC = () => {
	return (
		<div className={style.message}>
			<h1 className={`${style['message-title']} title`}>
				Entre em contato nos enviando uma <span>mensagem</span>!
			</h1>

			<p className={style['message-description']}>
				Você pode nos enviar <span>problemas</span> que você tendo com algum de
				seus eletrônicos, <span>sugestões</span>, <span>críticas</span> ou{' '}
				<span>elogios</span>. Sinta-se livre para me mandar qualquer mensagem!
			</p>
		</div>
	);
};

export default Contact;

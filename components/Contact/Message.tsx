import style from './style.module.scss';

const Contact: React.FC = () => {
	return (
		<div className={style.message}>
			<h1 className={`${style['message-title']} title`}>
				Be in touch sending us a <span>message</span>!
			</h1>

			<p className={style['message-description']}>
				You can send us <span>troubles</span> you are having with your
				electronics, <span>suggestions</span>, <span>criticism</span> or{' '}
				<span>compliments</span>. Feel free to send us any type of message!
			</p>
		</div>
	);
};

export default Contact;

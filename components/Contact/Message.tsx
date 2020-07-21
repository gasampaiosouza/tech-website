import style from './style.module.scss';
import Fade from 'react-reveal/Fade';

const Contact: React.FC = () => {
	return (
		<Fade bottom cascade>
			<div className={style.message}>
				<h1 className={`${style['message-title']} title`}>
					Be in touch by sending us a <span>message</span>!
				</h1>

				<p className={style['message-description']}>
					You can send us <span>troubles</span> you are having with your
					electronics, <span>suggestions</span>, <span>criticism</span> or{' '}
					<span>compliments</span>. Feel free to send us any type of message!
				</p>
			</div>
		</Fade>
	);
};

export default Contact;

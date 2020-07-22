import style from './style.module.scss';
import Fade from 'react-reveal/Fade';
import { FormEvent } from 'react';

const Contact: React.FC = () => {
	const submitForm = (event: FormEvent<HTMLFormElement>) => {
		//...
		return;
	};

	return (
		<Fade bottom cascade>
			<form className={style.form} onSubmit={(event) => submitForm(event)}>
				<div className={style['form-name']}>
					<label htmlFor="name">Name</label>
					<input
						className={style.input}
						type="text"
						id="name"
						required
						maxLength={35}
					/>
				</div>

				<textarea
					placeholder="Write your message here..."
					className={style.input}
					required
				></textarea>

				<button className="btn">Send</button>
			</form>
		</Fade>
	);
};

export default Contact;

import '../scss/style.scss';
import '../components/Header/burger.scss';
import { AppProps } from 'next/app';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<div>
			<Head>
				<title>TechNology</title>

				{/* font-family */}
				<link
					href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;900&display=swap"
					rel="stylesheet"
				/>
				<script
					src="https://kit.fontawesome.com/4603725681.js"
					crossorigin="anonymous"
				></script>
			</Head>
			<Component {...pageProps} />
		</div>
	);
}

export default MyApp;

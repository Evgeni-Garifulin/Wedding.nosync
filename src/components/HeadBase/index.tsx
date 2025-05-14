import React from "react"
import { Helmet } from "react-helmet";

const HeadBase: React.FC = () => {
	return (
		<Helmet htmlAttributes={{ lang: 'en' }}>
			<base href="/" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
			<meta httpEquiv="X-UA-Compatible" content="IE=edge" />

			<link rel="icon" type="image/png" href="/favicon/favicon-96x96.png" sizes="96x96" />
			<link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
			<link rel="shortcut icon" href="/favicon/favicon.ico" />
			<link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
			<meta name="apple-mobile-web-app-title" content="Mokka" />
			<link rel="manifest" href="/favicon/site.webmanifest" />
			<meta name="msapplication-TileColor" content="#F8F8F9" />
		</Helmet>
	);
};

export default HeadBase;

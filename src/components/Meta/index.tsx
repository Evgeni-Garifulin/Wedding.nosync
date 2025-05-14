import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

type MetaProps = {
	title?: string;
	description?: string;
	image?: string;
	keywords?: string;
};

const Meta: React.FC<MetaProps> = ({ title, description, image, keywords }) => {
	useEffect(() => {
		const script = document.createElement("script");
		script.type = "text/javascript";
		script.src = "https://assets.calendly.com/assets/external/widget.js";
		script.async = true;
		document.head.appendChild(script);

		return () => {
			document.head.removeChild(script);
		};
	}, []);

	return (
		<Helmet>
			<meta name="keywords" content={keywords} />
			{title && <title>{title}</title>}
			{title && <meta name="og:title" content={title} />}
			{title && <meta property="og:name" content={title} />}
			{description && <meta name="description" content={description} />}
			{description && <meta property="og:description" content={description} />}
			{image && <meta property="og:image" content={image} />}
			<meta property="og:type" content="website" />
			<link
				href="/sprite/sprite.svg"
				rel="preload"
				as="image"
				type="image/svg+xml"
			/>
			<script type="application/ld+json">
				{`{
				"@context": "https://schema.org",
				"@graph": [
					{
					"@type": "Organization",
					"name": "Mokka",
					"legalName": "Mokka",
					"foundingDate": "October 2023",
					"email": "info@gomokka.com",
					"url": "https://www.gomokka.com/",
					"@id": "https://www.gomokka.com/#problems",
					"knowsLanguage": [
						"https://www.wikidata.org/wiki/Q1860"
					],
					"knowsAbout": [
						"https://www.wikidata.org/wiki/Q899277",
						"https://www.wikidata.org/wiki/Q11660"
					],
					"logo": "http://www.gomokka.com/favicon/favicon.svg",
					"sameAs": [
						"https://www.linkedin.com/company/go-mokka/"
					],
					"founders": [
						{
						"@type": "Person",
						"name": "Max Krasnykh"
						}
					],
					"address": {
						"addressLocality": "New York",
						"addressRegion": "NY",
						"postalCode": "10001",
						"addressCountry": "US"
					},
					"description": "Streamline hiring with Mokka: automate screening calls and resume reviews to save 50%+ of your team’s time. Identify top talent using an evidence-based approach while improving candidate experience. Trusted by recruiters at Dell, IBM, Intel, and more to revolutionize talent acquisition."
					}
				]
				}`}
			</script>
		</Helmet>
	);
};

export default Meta;
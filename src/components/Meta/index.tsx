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
		</Helmet>
	);
};

export default Meta;
import React from 'react';
import cn from "classnames";
import LogoImage from './logo.svg';
import EmblemImage from './emblem.svg';
import LabelImage from './label.svg';

import './logo.scss';

type LogoProps = {
	className?: string,
	type: "full" | "emblem" | "label"
}

const Logo: React.FC<LogoProps> = ({
	className,
	type = "full"
}) => {
	const logoClass = cn(
		"logo",
		`logo--${type}`,
		className
	);

	let logoContent = null;

	if (type === "emblem") {
		logoContent = (
			<img className="logo__image" src={EmblemImage} alt="Mokka" width={40} height={40} />
		)
	}

	if (type === "label") {
		logoContent = (
			<img className="logo__image" src={LabelImage} alt="Mokka" width={98} height={32} />
		)
	}

	if (type === "full") {
		logoContent = (
			<img className="logo__image" src={LogoImage} alt="Mokka" width={154} height={40} />
		)
	}

	return (
		<a href="/" className={logoClass}>
			{logoContent}
		</a>
	)
}

export default Logo;
import React from "react";
import cn from "classnames";
import Text from "../Typography/Text";

import "./button.scss";

type ButtonProps = {
	id?: string;
	state?: "primary" | "light";
	size?: "sm" | "lg";
	href?: string;
	children: React.ReactNode;
	block?: boolean;
	icon?: {
		position: 'right' | 'left';
		name: string;
		width?: number;
		height?: number;
		color?: string;
	};
} & React.ButtonHTMLAttributes<HTMLButtonElement> &
	React.AnchorHTMLAttributes<HTMLAnchorElement>;

const Button: React.FC<ButtonProps> = ({
	id,
	state = "primary",
	size = "sm",
	href,
	children,
	className,
	block,
	...props
}) => {
	const buttonClass = cn(
		"button",
		`button--${state}`,
		`button--${size}`,
		{
			"button--block": block,
		},
		className
	);

	const buttonChildren = (
		<Text
			thinText
			tag="span"
			color={state === "primary" ? undefined : "contrast"}
		>
			{children}
		</Text>
	)

	if (href) {
		return (
			<a
				id={id}
				href={href}
				className={buttonClass}
				rel="noopener noreferrer"
				{...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
			>
				{buttonChildren}
			</a>
		);
	}

	return (
		<button
			id={id}
			className={buttonClass}
			type="button"
			{...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
		>
			{buttonChildren}
		</button>
	);
};

export default Button;

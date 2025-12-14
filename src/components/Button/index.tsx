import "./button.scss";

import cn from "classnames";
import { Icon, type IconProps } from "@components/Icon";

export const ButtonVariant = {
	primary: "primary",
	light: "light",
} as const;

export type ButtonProps<T extends React.ElementType> = {
	as?: T;
	variant?: keyof typeof ButtonVariant;
	size?: "sm" | "lg";
	href?: string;
	children: React.ReactNode;
	block?: boolean;
	startIcon?: IconProps['name'];
	endIcon?: IconProps['name'];
} & Omit<React.ComponentPropsWithoutRef<T>, 'as'>;

export const Button: React.FC<ButtonProps<React.ElementType>> = ({
	as,
	variant = "primary",
	size = "sm",
	children,
	className,
	block,
	startIcon,
	endIcon,
	...props
}) => {
	const buttonClass = cn(
		"btn",
		`btn--${variant}`,
		`btn--${size}`,
		{
			"btn--block": block,
		},
		className
	);

	const Component = as || 'button';

	return (
		<Component
			className={buttonClass}
			{...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
		>
			{startIcon && <Icon name={startIcon} color="white" width={24} height={24} className="btn__icon btn__icon--start" />}
			{children}
			{endIcon && <Icon name={endIcon} color="white" width={24} height={24} className="btn__icon btn__icon--end" />}
		</Component>
	);
};


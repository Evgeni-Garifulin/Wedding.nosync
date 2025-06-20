import React from 'react';
import cn from 'classnames';
import { type TypographyProps } from './types';
import './text.scss';

export interface TextProps extends TypographyProps {
	color?: 'contrast' | 'accent' | 'black';
	font?: 'arvo' | 'neucha';
	thinText?: boolean;
}

const Text: React.FC<TextProps & React.HTMLAttributes<HTMLElement>> = (props) => {
	const {
		tag = 'p',
		font = 'neucha',
		children,
		color,
		className,
		thinText,
		...rest
	} = props;

	const Tag = tag;

	const resultClassName = cn(
		'text',
		{ [`text--${color}`]: color },
		{ [`text--${font}`]: font },
		{ 'text--thin': thinText },
		className,
	);

	return (
		<Tag className={resultClassName} {...rest}>{children}</Tag>
	);
};

export default Text;

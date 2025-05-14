import React from 'react';
import cn from 'classnames';
import { type TypographyProps } from './types';
import './text.scss';

export interface TextProps extends TypographyProps {
	size: 'p2' | 'p1' | 'p0';
	weight?: 'semibold' | 'medium' | 'regular';
	color?: 'light' | 'xlight' | 'contrast' | 'accent';
}

const Text: React.FC<TextProps & React.HTMLAttributes<HTMLElement>> = (props) => {
	const {
		tag = 'p',
		children,
		color,
		className,
		size,
		weight,
		italic,
		...rest
	} = props;

	const Tag = tag;

	const resultClassName = cn(
		'text',
		{
			'text--italic': italic,
			[`text--${size}`]: size,
			[`text--${weight}`]: weight,
			[`text--${color}`]: color,
		},
		className,
	);

	return (
		<Tag className={resultClassName} {...rest}>{children}</Tag>
	);
};

export default Text;

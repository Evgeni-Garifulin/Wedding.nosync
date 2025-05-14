import React from 'react';
import cn from 'classnames';
import { type TypographyProps } from './types';
import './title.scss';

export interface TitleProps extends TypographyProps {
	size: 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
	color?: 'light' | 'xlight' | 'contrast' | 'accent-dark' | 'accent';
	weight?: 'semibold' | 'medium' | 'regular';
}

const Title: React.FC<TitleProps & React.HTMLAttributes<HTMLElement>> = (props) => {
	const {
		tag,
		children,
		color,
		className,
		size,
		italic,
		weight,
		...rest
	} = props;

	const Tag = tag || (size === 'h1' ? 'h1' : size);

	const resultClassName = cn(
		'title',
		{
			'title--italic': italic,
			[`title--${size}`]: size,
			[`title--${weight}`]: weight,
			[`title--${color}`]: color,
		},
		className,
	);

	return (
		<Tag className={resultClassName} {...rest}>{children}</Tag>
	);
};

export default Title;

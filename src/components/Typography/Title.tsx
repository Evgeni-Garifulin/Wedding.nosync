import React from 'react';
import cn from 'classnames';
import { type TypographyProps } from './types';
import './title.scss';

export interface TitleProps extends TypographyProps {
	size: 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
	color?: 'contrast' | 'accent' | 'black';
}

const Title: React.FC<TitleProps & React.HTMLAttributes<HTMLElement>> = (props) => {
	const {
		tag,
		children,
		color,
		className,
		size,
		...rest
	} = props;

	const Tag = tag || (size === 'h1' ? 'h1' : size);

	const resultClassName = cn(
		'title',
		{
			[`title--${size}`]: size,
			[`title--${color}`]: color,
		},
		className,
	);

	return (
		<Tag className={resultClassName} {...rest}>{children}</Tag>
	);
};

export default Title;

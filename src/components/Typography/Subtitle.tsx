import React from 'react';
import cn from 'classnames';
import { type TypographyProps } from './types';
import './subtitle.scss';

export interface SubtitleProps extends TypographyProps {
	weight?: 'medium' | 'regular' | 'semibold';
	color?: 'light' | 'xlight' | 'contrast' | 'accent';
}

const Subtitle: React.FC<SubtitleProps & React.HTMLAttributes<HTMLElement>> = (props) => {
	const {
		tag: Tag = 'p',
		children,
		color,
		className,
		weight = "medium",
		italic,
		...rest
	} = props;

	const resultClassName = cn(
		'subtitle',
		{
			'subtitle--italic': italic,
			[`subtitle--${weight}`]: weight,
			[`subtitle--${color}`]: color,
		},
		className,
	);

	return (
		<Tag className={resultClassName} {...rest}>{children}</Tag>
	);
};

export default Subtitle;

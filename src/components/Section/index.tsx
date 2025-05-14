import './section.scss';
import React from 'react';
import cn from 'classnames';
import { useResponsive } from '@hooks';
import { Title } from '../Typography';

type sectionProps = React.PropsWithChildren & {
	title?: string | React.ReactNode;
	type?: 'dark' | 'white' | 'green' | 'white-10' | 'grey-1' | 'grey-2';
	wide?: boolean;
	className?: string;
	id?: string;
	tag?: 'div' | 'section' | 'li';
}


const Section: React.FC<sectionProps> = ({
	title,
	type,
	className,
	wide,
	id,
	children,
	tag = 'section',
}) => {

	const {
		isDesktop,
	} = useResponsive();

	const resultClassName = cn(
		'section',
		{
			[`section--${type}`]: type,
			[`section--wide`]: wide,
		},
		className,
	);

	const Tag = tag;

	return (
		<Tag id={id} className={resultClassName}>
			<div className="section__body">
				{title && (
					<Title
						size={isDesktop ? "h2" : "h3"}
						tag="h2"
						className="section__title"
					>
						{title}
					</Title>
				)}
				{children}
			</div>
		</Tag>
	);
};

export default Section;

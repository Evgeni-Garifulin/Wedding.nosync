import './section.scss';

import cn from 'classnames';
import { Title } from '@components/Typography/Title';

type sectionProps = React.PropsWithChildren & {
	id: string;
	className?: string;
	tag?: 'div' | 'section' | 'li';
	title?: string;
}


export const Section: React.FC<sectionProps> = ({
	id,
	className,
	children,
	tag = 'section',
	title,
}) => {

	const Tag = tag;

	return (
		<Tag id={id} className={className}>
			{title && <Title size="h2" className="mb-2 tab:mb-3 desk:mb-4">{title}</Title>}
			{children}
		</Tag>
	);
};


import './section.scss';
import React, { useRef } from 'react';

import { motion, useInView } from 'framer-motion';

import { Title } from '@components';

type sectionProps = React.PropsWithChildren & {
	id?: string;
	tag?: 'div' | 'section' | 'li';
	title?: string;
}


const Section: React.FC<sectionProps> = ({
	id,
	children,
	tag = 'section',
	title,
}) => {

	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: '-100px' });

	const Tag = tag;

	return (
		<Tag id={id} className={`section ${id}`}>
			<motion.div
				ref={ref}
				initial={{ opacity: 0, y: 50 }}
				animate={isInView ? { opacity: 1, y: 0 } : {}}
				transition={{ duration: 1, ease: 'easeOut' }}
				className="section__inner"
			>
				{title && <Title size="h2">{title}</Title>}
				{children}
			</motion.div>
		</Tag>
	);
};

export default Section;

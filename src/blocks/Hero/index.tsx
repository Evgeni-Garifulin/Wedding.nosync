import React, { useRef } from 'react';
import './hero.scss';

import { motion, useInView } from 'framer-motion';
import { Button, Title, Text } from '@components';

const HeroSection: React.FC = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: '-100px' });

	return (
		<section id="intro" className="hero">
			<motion.div
				ref={ref}
				initial={{ opacity: 0, y: 50 }}
				animate={isInView ? { opacity: 1, y: 0 } : {}}
				transition={{ duration: 1, ease: 'easeOut' }}
				className="hero__message"
			>
				<Text font="arvo" color="black">
					03 05 25&nbsp;/ 17:00
				</Text>
				<Title size="h1">
					Приглашаем тебя,<br/> дорогой друг,<br/> на&nbsp;нашу свадьбу
				</Title>
				<Text
					className="hero__description"
				>
					Ждём вас на&nbsp;нашей свадьбе!
				</Text>
				<Button className="hero__widget-button" size="lg" block>
					Я точно хочу пойти
				</Button>
			</motion.div>
		</section>
	);
};

export default HeroSection;
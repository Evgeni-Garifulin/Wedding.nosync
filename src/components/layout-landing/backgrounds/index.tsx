'use client';

import './backgrounds.scss';

import { useEffect, useRef } from 'react';
import { SrcSetType } from '@components/Picture';

export interface BackgroundsProps {
	background?: {
		top: { srcSet: SrcSetType };
		right: { srcSet: SrcSetType };
		bottom: { srcSet: SrcSetType };
		left: { srcSet: SrcSetType };
	};
}

const PARALLAX_SPEED = 0.3;

export function ParallaxBg() {
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const el = ref.current;
		if (!el) return;

		const handleScroll = () => {
			const offset = window.scrollY * PARALLAX_SPEED;
			el.style.transform = `translateY(${offset}px)`;
		};

		handleScroll();
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return <div ref={ref} className="parallax-bg" aria-hidden="true" />;
}

export const Backgrounds: React.FC<BackgroundsProps> = ({ background }) => {
	if (!background) return null;

	const { top, right, bottom, left } = background;

	return (
		<>
			<div
				className="bg-pattern bg-pattern--top"
				style={{ backgroundImage: `url(${top.srcSet.img1x})` }}
				aria-hidden="true"
			/>
			<div
				className="bg-pattern bg-pattern--right"
				style={{ backgroundImage: `url(${right.srcSet.img1x})` }}
				aria-hidden="true"
			/>
			<div
				className="bg-pattern bg-pattern--bottom"
				style={{ backgroundImage: `url(${bottom.srcSet.img1x})` }}
				aria-hidden="true"
			/>
			<div
				className="bg-pattern bg-pattern--left"
				style={{ backgroundImage: `url(${left.srcSet.img1x})` }}
				aria-hidden="true"
			/>
		</>
	);
};

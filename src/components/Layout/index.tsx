import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ScrollSmoother from 'gsap/ScrollSmoother';
import HeadBase from '../HeadBase';
import Meta from '../Meta';

import '@styles/index.scss';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export interface LayoutProps {
	children: React.ReactNode;
	description?: string;
	image?: string;
	title?: string;
	keywords?: string;
}

const Layout: React.FC<LayoutProps> = ({
	children,
	description,
	image,
	title,
	keywords,
}) => {
	const wrapperRef = useRef<HTMLDivElement>(null);
	const contentRef = useRef<HTMLDivElement>(null);
	const leftFlowersRef = useRef<HTMLDivElement>(null);
	const rightFlowersRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!wrapperRef.current || !contentRef.current) return;

		const ctx = gsap.context(() => {
			const smoother = ScrollSmoother.create({
				wrapper: wrapperRef.current!,
				content: contentRef.current!,
				smooth: 0.5,
				effects: true,
			});

			// Параллакс для цветов
			if (leftFlowersRef.current && rightFlowersRef.current) {
				gsap.to(leftFlowersRef.current, {
					y: -400,
					scrollTrigger: {
						trigger: contentRef.current,
						start: "top top",
						end: "bottom top",
						scrub: 3,
					},
				});

				gsap.to(rightFlowersRef.current, {
					y: -600,
					scrollTrigger: {
						trigger: contentRef.current,
						start: "top top",
						end: "bottom top",
						scrub: 1,
					},
				});
			}
		}, wrapperRef);

		return () => ctx.revert();
	}, []);

	return (
		<>
			<HeadBase />
			<Meta
				description={description}
				image={image}
				title={title}
				keywords={keywords}
			/>
			<div id="wrapper" ref={wrapperRef}>
				<div id="content" ref={contentRef}>
					<main id="main" className="main">
						<div
							className="bg-flowers bg-flowers--top"
							ref={leftFlowersRef}
						/>
						<div
							className="bg-flowers bg-flowers--right"
							ref={rightFlowersRef}
						/>
						<div
							className="bg-flowers bg-flowers--bottom"
							ref={leftFlowersRef}
						/>
						<div
							className="bg-flowers bg-flowers--left"
							ref={leftFlowersRef}
						/>
						<div className="container">
							{children}
						</div>
					</main>
				</div>
			</div>
		</>
	);
};

export default Layout;

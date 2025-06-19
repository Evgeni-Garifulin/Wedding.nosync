import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ScrollSmoother from 'gsap/ScrollSmoother';

import HeadBase from '../HeadBase';
import Meta from '../Meta';
import Header from '../Header';

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

	useEffect(() => {
		if (!wrapperRef.current || !contentRef.current) return;

		const ctx = gsap.context(() => {
			ScrollSmoother.create({
				wrapper: wrapperRef.current!,
				content: contentRef.current!,
				smooth: 0.7,
				effects: true,
			});
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
						<Header />
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

import React from 'react';
import './hero.scss';

import { Section, Button, Title, Text, Emoji, Frame } from '@components';

import { useResponsive } from '@hooks';

const HeroSection: React.FC = () => {
	const {
		isDesktop,
	} = useResponsive();

	return (
		<Section
			id="intro"
			className="hero"
		>
			<div className="hero__message">
				<Title
					size={isDesktop ? "h1" : "h2"}
					tag="h1"
					color="accent"
				>
					AI assistant
					<br />
					<Title
						size={isDesktop ? "h1" : "h2"}
						tag="span"
						color="contrast"
					>
						for talent teams
					</Title>
				</Title>
				<Text
					size={isDesktop ? "p0" : "p1"}
					weight="regular"
					color="contrast"
					className="hero__description"
				>
					How TA&nbsp;teams offload screening calls and resume reviews and hire top talent based on&nbsp;evidence
				</Text>
				<Frame
					type="white-10"
					borderRadius="16"
					className="hero__widget-button"
					noBorder
				>
					<Button
						className="btn-open-modal"
						size="lg"
						block
					>
						Book a&nbsp;demo
					</Button>

					<Text size="p1" color="contrast" className="hero__widget-text">
						<Emoji name="zap" size={20} block />
						{' '}
						Reclaim&nbsp;<b>50%+</b> of&nbsp;your time
					</Text>
				</Frame>
			</div>
			<video
				autoPlay
				muted
				loop
				playsInline
				className="hero__video"
				poster="/img/hero/video-underlay.jpg"
			>
				<source src="/video/background-video.webm" type="video/webm" />
				<source src="/video/background-video.mp4" type="video/mp4" />
			</video>
		</Section>
	);
}

export default HeroSection;

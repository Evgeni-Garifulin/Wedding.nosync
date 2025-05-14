import React from 'react'
import { Section, Title, Text, Emoji, Frame, Picture } from '@components';
import howIsMokkaDifferentImg from '@static/img/how-is-mokka-different/howIsMokkaDifferentImg'

import { useResponsive } from '@hooks';

import './howIsMokkaDifferent.scss';

const HowIsMokkaDifferent: React.FC = () => {
	const {
		isDesktop,
	} = useResponsive();

	const checkRow = (text: string) => (
		<div className="how-is-mokka-different__row how-is-mokka-different__row--check">
			<div className="how-is-mokka-different__row-icon">
				<Emoji name="check-mark" size={16} />
			</div>
			<Text
				size={isDesktop ? "p1" : "p2"}
				className="how-is-mokka-different__row-text"
			>
				{text}
			</Text>
		</div>
	);

	const thumbsDownRow = (text: string) => (
		<div className="how-is-mokka-different__row how-is-mokka-different__row--thumbs-down">
			<div className="how-is-mokka-different__row-icon">
				<Emoji name="thumbs-down" size={16} />
			</div>
			<Text
				size={isDesktop ? "p1" : "p2"}
				className="how-is-mokka-different__row-text"
			>
				{text}
			</Text>
		</div>
	);

	return (
		<Section
			id="solution"
			className="how-is-mokka-different"
			title="How is Mokka different?"
			type="white"
		>
			<Frame
				type="grey-1"
				className="how-is-mokka-different__item"
			>
				<Title
					size={isDesktop ? "h4" : "h5"}
					weight={!isDesktop ? "semibold" : undefined}
					tag="h3"
				>
					Automates busywork recruiters actually&nbsp;do
				</Title>

				{checkRow("Automates resume reviews, screening calls & related admin")}
				{thumbsDownRow("Not yet another tool adding extra step requiring extensive manual review")}
			</Frame>

			<Frame
				type="grey-1"
				className="how-is-mokka-different__item"
			>
				<Title
					size={isDesktop ? "h4" : "h5"}
					weight={!isDesktop ? "semibold" : undefined}
					tag="h3"
				>
					Rated
					{' '}
					<Emoji name="star" />
					{' '}
					4.5 by&nbsp;candidates
				</Title>

				{checkRow("Feel respected, seen, appreciate questions quality and flexibility")}
				{thumbsDownRow("No time limits, proctoring, or jumping through the hoops")}
			</Frame>

			<Frame
				type="grey-1"
				className="how-is-mokka-different__item"
			>
				<Title
					size={isDesktop ? "h4" : "h5"}
					weight={!isDesktop ? "semibold" : undefined}
					tag="h3"
				>
					Evidence-based
				</Title>

				{checkRow("Scoring based on past performance, accomplishments, and environment")}
				{thumbsDownRow("No voodoo tactics or questionable science")}
			</Frame>

			<Picture
				srcSet={howIsMokkaDifferentImg}
				alt="How Mokka is different"
				width="528"
				height="716"
				className="how-is-mokka-different__image"
			/>
		</Section>
	);
}

export default HowIsMokkaDifferent;

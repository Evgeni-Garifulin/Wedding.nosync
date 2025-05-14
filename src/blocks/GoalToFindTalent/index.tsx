import './goal-to-find.scss';

import React from 'react'
import { useResponsive } from '@hooks';
import { Section, Frame, Emoji, Title, Subtitle, Text } from '@components';

const GoalToFindTalent: React.FC = () => {
	const {
		isDesktop,
		isMobile
	} = useResponsive();

	const additionalContent = 'Works seamlessly with your ATS and job boards'

	return (
		<Section
			id="problems"
			className="goal-to-find"
			type="dark"
		>
			<Title
				size={isDesktop ? "h2" : "h3"}
				tag="h2"
			>
				Your goal: find
				{' '}
				<Title
					size={isDesktop ? "h2" : "h3"}
					tag="span"
					color="accent-dark"
				>
					top&nbsp;talent
				</Title>
				, without wasting time
			</Title>
			<Frame
				type="transparent"
				className="goal-to-find__we-hear"
				size="xl"
				tag="article"
			>
				<div className="goal-to-find__we-hear-title">
					<Title
						size={isDesktop ? "h3" : "h4"}
						tag="h3"
					>
						When TA&nbsp;teams talk with&nbsp;us, we&nbsp;typically hear...
					</Title>
					<Frame
						size="sm"
						type="white-10"
						quarterRound
						noBorder
						className="goal-to-find__we-hear-title-fact"
					>
						<Emoji size={24} block name="nerd-face" />
						<Text size={isDesktop ? "p1" : "p2"}>
							80% of&nbsp;team effort spent on&nbsp;repetitive tasks
						</Text>
					</Frame>
				</div>
				<div className="goal-to-find__we-hear-content">
					<ul>
						<Frame
							tag="li"
							type="white-10"
						>
							{isDesktop ? (
								<Subtitle
								    italic
									weight="regular"
								>
									&ldquo;...buried under <b>hundreds of&nbsp;irrelevant applications.</b>&rdquo;
								</Subtitle>
							) : (
								<Text
								    italic
									size="p1"
									weight="medium"
								>
									&ldquo;...buried under <b>hundreds of&nbsp;irrelevant applications.</b>&rdquo;
								</Text>
							)}
						</Frame>
						<Frame
							tag="li"
							type="white-10"
						>
							{isDesktop ? (
								<Subtitle
								    italic
									weight="regular"
								>
									&ldquo;...process only part of&nbsp;the funnel and <b>miss top talent</b>.&rdquo;
								</Subtitle>
							) : (
								<Text
								    italic
									size="p1"
									weight="medium"
								>
									&ldquo;...process only part of&nbsp;the funnel and <b>miss top talent</b>.&rdquo;
								</Text>
							)}
						</Frame>
						<Frame
							tag="li"
							type="white-10"
						>
							{isDesktop ? (
								<Subtitle
								    italic
									weight="regular"
								>
									&ldquo;<b>..difficult</b> to&nbsp;cut through the noise <b>to&nbsp;engage</b> top <b>candidates.</b>&rdquo;
								</Subtitle>
							) : (
								<Text
								    italic
									size="p1"
									weight="medium"
								>
									&ldquo;<b>..difficult</b> to&nbsp;cut through the noise <b>to&nbsp;engage</b> top <b>candidates.</b>&rdquo;
								</Text>
							)}
						</Frame>
					</ul>
					<img
						src={`./img/illustrations/we-hear-img.svg`}
						width="334"
						height="359"
						loading="lazy"
						alt=""
					/>
				</div>
			</Frame>
			<Frame
				type="white-10"
				size="xl"
				tag="article"
				noBorder
				className="goal-to-find__how-teams-solve"
			>
				<Title
					size={isDesktop ? "h3" : "h4"}
					tag="h3"
				>
					How TA&nbsp;teams try to&nbsp;solve&nbsp;it
				</Title>
				<ul className="goal-to-find__how-solve-list">
					<Frame tag="li" textColor="dark">
						<Title
							size={isDesktop ? "h4" : "h5"}
							tag="h3"
						>
							Do&nbsp;it&nbsp;manually or&nbsp;outsource
						</Title>
						<Text
							size={isDesktop ? "p1" : "p2"}
							className="goal-to-find__how-solve-list-item-desc"
						>
							good if&nbsp;you have unlimited resources...
						</Text>
						<ul className="goal-to-find__how-solve-list-item-list list list--red">
							<li>
								<Text size={isDesktop ? "p1" : "p2"}>Expensive</Text>
							</li>
							<li>
								<Text size={isDesktop ? "p1" : "p2"}>Inconsistencies, bias</Text>
							</li>
						</ul>
					</Frame>
					<Frame tag="li" textColor="dark">
						<Title
							size={isDesktop ? "h4" : "h5"}
							tag="h3"
						>
							Assessment tools
						</Title>
						<Text
							size={isDesktop ? "p1" : "p2"}
							className="goal-to-find__how-solve-list-item-desc"
						>
							useful lower in&nbsp;the funnel but...
						</Text>
						<ul className="goal-to-find__how-solve-list-item-list list list--red">
							<li>
								<Text size={isDesktop ? "p1" : "p2"}>Poor candidate&nbsp;UX</Text>
							</li>
							<li>
								<Text size={isDesktop ? "p1" : "p2"}>Setup, admin, review effort</Text>
							</li>
						</ul>
					</Frame>
					<Frame tag="li" textColor="dark">
						<Title
							size={isDesktop ? "h4" : "h5"}
							tag="h3"
						>
							Can [new] ATS do&nbsp;it?
						</Title>
						<Text
							size={isDesktop ? "p1" : "p2"}
							className="goal-to-find__how-solve-list-item-desc"
						>
							system of&nbsp;record and pipeline...
						</Text>
						<ul className="goal-to-find__how-solve-list-item-list list list--red">
							<li>
								<Text size={isDesktop ? "p1" : "p2"}>Doesn&rsquo;t help identify top talent</Text>
							</li>
							<li>
								<Text size={isDesktop ? "p1" : "p2"}>CV&nbsp;screening unreliable, if&nbsp;exists</Text>
							</li>
						</ul>
					</Frame>
				</ul>
			</Frame>
			<Frame
				type="green"
				textColor="dark"
				size="xl"
				tag="article"
				className="goal-to-find__offload-calls"
			>
				<Title
					size={isDesktop ? "h3" : "h4"}
					tag="h3"
				>
					Mokka: offload screening calls, resume reviews and related admin
				</Title>
				<ul className="goal-to-find__offload-calls-list">
					<Frame tag="li" className="goal-to-find__offload-calls-item">
						<img
							src={`./img/illustrations/looking-top-talent-img.svg`}
							width="190"
							height="170"
							loading="lazy"
							alt=""
							className="goal-to-find__offload-calls-item-img"
						/>
						<Title
							size={isDesktop ? "h4" : "h5"}
							tag="h4"
						>
							Attract and engage<br />top talent
						</Title>
						<Text
							size={isDesktop ? "p1" : "p2"}
							className="goal-to-find__how-solve-list-item-desc"
						>
							Compelling job landing pages featuring mission, team, role context, outcomes.
						</Text>
					</Frame>
					<Frame tag="li" className="goal-to-find__offload-calls-item">
						<img
							src={`./img/illustrations/automative-calls-img.svg`}
							width="190"
							height="170"
							loading="lazy"
							alt=""
							className="goal-to-find__offload-calls-item-img"
						/>
						<Title
							size={isDesktop ? "h4" : "h5"}
							tag="h4"
						>
							Automate screening calls &amp;&nbsp;resume reviews
						</Title>
						<Text
							size={isDesktop ? "p1" : "p2"}
							className="goal-to-find__how-solve-list-item-desc"
						>
							Talent auto-invited via ATS, completes top-rated online sharing experience.
						</Text>
					</Frame>
					<Frame tag="li" className="goal-to-find__offload-calls-item">
						<img
							src={`./img/illustrations/identify-top-talent.svg`}
							width="190"
							height="170"
							loading="lazy"
							alt=""
							className="goal-to-find__offload-calls-item-img"
						/>
						<Title
							size={isDesktop ? "h4" : "h5"}
							tag="h4"
						>
							Identify top talent with one click
						</Title>
						<Text
							size={isDesktop ? "p1" : "p2"}
							className="goal-to-find__how-solve-list-item-desc"
						>
							Select based on&nbsp;performance, past roles, accomplishments.
						</Text>
					</Frame>
				</ul>
				<Frame
					className="goal-to-find__offload-calls-additional"
					borderRadius={isMobile ? "20" : "40"}
				>
					<Emoji name="check-mark-button" size={isDesktop ? 36 : 24} block />

					{isDesktop ? (
						<Title
							size="h4"
							tag="p"
						>
							{additionalContent}
						</Title>
					) : (
						<Text
							size="p1"
							weight="semibold"
						>
							{additionalContent}
						</Text>
					)}
				</Frame>
			</Frame>
		</Section >
	);
}

export default GoalToFindTalent;

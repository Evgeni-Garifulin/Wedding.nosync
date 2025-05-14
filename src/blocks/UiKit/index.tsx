import './ui-kit.scss';

import React from 'react'
import { Section, Emoji, Icon, Frame, Title, Subtitle, Text } from '@components';

const UiKitSection: React.FC = () => {
	return (
		<Section id="ui-kit" className="ui-kit">
			<Emoji name="zap" />

			<Title
				size="h1"
				color="accent"
			>
				Zaloopa Texti
			</Title>
			<Title
				size="h1"
			>
				H1 Basic
			</Title>
			<Title
				size="h2"
				color="accent"
			>
				H2 Accent
			</Title>
			<Title
				size="h2"
				color="accent"
				italic
			>
				H2 Accent italic
			</Title>
			<Title
				size="h3"
				color="contrast"
			>
				H3 Contrast
			</Title>
			<Title
				size="h4"
				color="light"
			>
				H4 Light
			</Title>
			<Title
				size="h5"
				color="xlight"
			>
				H5 Xlight
			</Title>
			<Subtitle>
				Subtitle Basic (Q1)
			</Subtitle>
			<Subtitle
				weight="semibold"
			>
				Subtitle semibold (Q1)
			</Subtitle>
			<Subtitle
				weight="semibold"
				italic
			>
				Subtitle semibold italic(Q1)
			</Subtitle>
			<Text
				size="p0"
			>
				Text P0
			</Text>
			<Text
				size="p0"
				italic
			>
				Text P0 italic
			</Text>
			<Text
				size="p1"
			>
				Text Basic [p1]
			</Text>
			<Text
				size="p2"
			>
				Text P2
			</Text>

			<Title
				size="h1"
				color="accent"
			>
				Zaloopa Iknoki
			</Title>
			Chevron-right
			<Icon name="сhevron-right" />
			Chevron-left
			<Icon name="сhevron-left" />
			Arrow-down
			<Icon name="arrow-down" />

			<Title
				size="h1"
				color="accent"
			>
				Zaloopa freimi ebaniye
			</Title>
			<Frame>
				<Text size="p2">Очко динозавра (фрейм базовый)</Text>
			</Frame>
			<Frame size="xxl" type="green">
				<Text size="p2">Очко динозавра (Большой зеленый)</Text>
			</Frame>
			<Frame size="xxl" type="dark" quarterRound borderRadius="40">
				<Title size="h5">Очко динозавра (Без одного скругления)</Title>
			</Frame>
			<Frame size="xxl" type="dark">
				<Text size="p2">Очко динозавра (Черное)</Text>
			</Frame>
			<Frame size="xl" type="transparent">
				<Text size="p2">Очко динозавра (прозрачный если вглядеться, то есть бордер)</Text>
			</Frame>
			<Frame size="xxl" type="grey-1">
				<Text size="p2">Очко динозавра (серое)</Text>
			</Frame>

			<Title
				size="h1"
				color="accent"
			>
				Zaloopa sekcii ebaniye
			</Title>
			<Section
				id="test-section"
				title="Privet, I'm section"
			>
				<Frame size="xxl" type="dark">
					<Text size="p2">Очко динозавра (Черное)</Text>
				</Frame>
			</Section>
			<Section
				type="dark"
				id="test-section-dark"
				title="Privet, I'm section"
			>
				<Frame size="xxl" type="green" textColor="dark">
					<Text size="p2">
						Очко динозавра (Большой зеленый)
					</Text>
					<Frame size="xl">
						<Text size="p0">
							Очко динозавра (Большой зеленый)
						</Text>
					</Frame>
				</Frame>
			</Section>
		</Section >
	);
}

export default UiKitSection;

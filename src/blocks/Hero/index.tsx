import React from 'react';
import './hero.scss';

import { Title, Text, Section, Button } from '@components';
import { useCountdown } from '@hooks';

const HeroSection: React.FC = () => {
	const weddingDate = new Date(2025, 6, 3, 17, 0, 0).toISOString();
	const timeLeft = useCountdown(weddingDate);

	const formatNumber = (num: number): string => {
		return num.toString().padStart(2, '0');
	};

	const formatCountdown = () => {
		if (timeLeft.isExpired) {
			return 'Свадьба уже прошла!';
		}

		const parts = [];
		if (timeLeft.days > 0) parts.push(`${timeLeft.days} /`);
		if (timeLeft.hours > 0 || timeLeft.days > 0) parts.push(`${formatNumber(timeLeft.hours)} :`);
		if (timeLeft.minutes > 0 || timeLeft.hours > 0 || timeLeft.days > 0) parts.push(`${formatNumber(timeLeft.minutes)} :`);
		parts.push(`${formatNumber(timeLeft.seconds)}`);

		return parts.join(' ');
	};

	return (
		<Section id="intro">
			<Text font="arvo" color="black">
				03&nbsp;06&nbsp;25&nbsp;/ 17:00
			</Text>
			<Text tag="h1" color="black">
				Приглашение на&nbsp;свадьбу Агнеты и&nbsp;Жени
			</Text>

			<Title tag="p" size="h1">
				У нас свадьба <br />
				и&nbsp;мы&nbsp;хотим, чтобы ты&nbsp;пришел
			</Title>

			<Text>
				Стрелковый клуб&nbsp;| Курган
			</Text>

			<Button size="lg" href="https://t.me/+PbOq45ueX-9lYzE6" target="_blank" rel="noopener noreferrer">Я точно хочу пойти</Button>

			<img
				src="/icons/leaf.svg"
				alt="Красивый листочек"
				width={160}
				height={100}
			/>
			<Text font="arvo" color="accent" tag="span" className="hero__countdown">
				{formatCountdown()}
			</Text>
		</Section>
	);
};

export default HeroSection;
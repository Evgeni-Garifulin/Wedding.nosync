import './hero.scss';

import cn from 'classnames';
import { Title, Text, Link, Counter, Section, Button } from '@components';

interface HeroSectionProps {
	className?: string;
}

export const HeroSection: React.FC<HeroSectionProps> = async ({ className }) => {
	const weddingDate = new Date(2025, 12, 14, 17, 0, 0).toISOString();

	return (
		<Section id="hero" className={cn('hero', className)}>
			<Counter targetDate={weddingDate} expiredText="Свадьба уже прошла!" />
			<Text font="arvo" color="black" className="mt-2 tab:mt-3 desk:mt-4">
				03&nbsp;07&nbsp;25&nbsp;/ 17:00
			</Text>
			<Link
				href="/calendar/wedding-calendar-add.ics"
				type="underline"
				font="neucha"
				download="/calendar/wedding-calendar-add.ics"
				target="_blank"
				rel="noopener noreferrer"
				className="mt-2 tab:mt-3 desk:mt-4"
			>
				Добавить в&nbsp;календарь
			</Link>
			<Text tag="h1" color="black" className="mt-2 tab:mt-3 desk:mt-4">
				Приглашение на&nbsp;свадьбу Агнеты и&nbsp;Жени
			</Text>

			<Title tag="p" size="h1" className="mt-2 tab:mt-3 desk:mt-4">
				У нас свадьба <br />
				и&nbsp;мы&nbsp;хотим, чтобы ты&nbsp;пришел
			</Title>

			<Text className="mt-2 tab:mt-3 desk:mt-4">
				Стрелковый клуб&nbsp;| Курган
			</Text>

			<Button
				className="mt-2 tab:mt-3 desk:mt-4"
				as={Link}
				href="https://t.me/+PbOq45ueX-9lYzE6"
				size="lg"
				target="_blank"
				rel="noopener noreferrer"
				endIcon="arrow-right"
			>
				Я точно буду
			</Button>

			<img
				src={require('./icons/leaf.svg').default.src}
				alt="Красивый листочек"
				loading="lazy"
				width={160}
				height={100}
				className="mt-2 tab:mt-3 desk:mt-4 hero__img"
			/>
		</Section>
	);
};
import './place.scss';

import React from 'react';
import { Text, Section, Button } from '@components';

import { useCountdown } from '@hooks';

const Place: React.FC = () => {
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
		<Section id="place" title="Место сбора:">
			<Text font="arvo" color="black">
				03&nbsp;06&nbsp;25&nbsp;/ 17:00 <br /><Text font="arvo" color="accent" tag="span" className="hero__countdown">
					{formatCountdown()}
				</Text>
			</Text>
			<Text>
				Курганский стрелковый клуб<br />
				Адрес и&nbsp;подробная информация на&nbsp;карте ниже
			</Text>

			<div style={{ position: 'relative', overflow: 'hidden' }} className='place__map-wrapper'>
				<iframe
					src="https://yandex.com/map-widget/v1/org/kurgansky_strelkovy_klub/96399076417/?ll=65.381841%2C55.391786&z=16"
					frameBorder="1"
					allowFullScreen={true}
					style={{ position: 'relative' }}
					title="Карта расположения Курганского стрелкового клуба"
					className="place__map"
				/>
			</div>
			<Text>
				Кнопка навигатора для лиги лени <br/>(нужно приложение)
			</Text>
			<Button
				size="lg"
				block
				href="yandexnavi://build_route_on_map?lat_to=55.391786&lon_to=65.381841"
				rel="noopener noreferrer"
			>
				Яндекс навигатор
			</Button>
		</Section>
	);
};

export default Place;
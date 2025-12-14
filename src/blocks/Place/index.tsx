import './place.scss';

import cn from 'classnames';
import { Text, Section, Counter, Button } from '@components';

interface PlaceProps {
	className?: string;
}

export const Place: React.FC<PlaceProps> = async ({ className }) => {
	const weddingDate = new Date(2025, 6, 3, 17, 0, 0).toISOString();

	return (
		<Section id="place" title="Место сбора:" className={cn('place', className)}>
			<Text font="arvo" color="black">
				03&nbsp;07&nbsp;25&nbsp;/ 17:00 <br />
			</Text>
			<Counter tag="p" targetDate={weddingDate} expiredText="Свадьба уже прошла!" className="mt-2 tab:mt-3 desk:mt-4" />
			<Text className="mt-2 tab:mt-3 desk:mt-4">
				Курганский стрелковый клуб<br />
				Адрес и&nbsp;подробная информация на&nbsp;карте ниже
			</Text>

			<div style={{ position: 'relative', overflow: 'hidden' }} className='place__map-wrapper'>
				<iframe
					src="https://yandex.com/map-widget/v1/org/kurgansky_strelkovy_klub/96399076417/?ll=65.381841%2C55.391786&z=16"
					allowFullScreen={true}
					style={{ position: 'relative' }}
					title="Карта расположения Курганского стрелкового клуба"
					className="place__map mt-2 tab:mt-3 desk:mt-4"
				/>
			</div>
			<Text className="mt-2 tab:mt-3 desk:mt-4">
				Кнопка навигатора для лиги лени <br />(нужно приложение)
			</Text>
			<Button
				size="lg"
				block
				href="yandexnavi://build_route_on_map?lat_to=55.391786&lon_to=65.381841"
				rel="noopener noreferrer"
				className="mt-2 tab:mt-3 desk:mt-4"
			>
				Яндекс навигатор
			</Button>
		</Section>
	);
};

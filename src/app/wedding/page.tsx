import { LayoutLanding, AudioPlayer } from '@components';
import { HeroSection, DressCode, MainInfo, Place, Usefull, Remember } from '@blocks';
import { type LayoutLandingProps } from '@components/layout-landing';

import { bgFlowers } from './img/bgFlowers';

const IndexPage: React.FC = () => {
	const MenuTabs = [
		{ id: 'intro', label: 'Главная' },
		{ id: 'dresscode', label: 'Дресс-код' },
		{ id: 'main-info', label: 'База' },
		{ id: 'remepber', label: 'Памятка' },
		{ id: 'usefull', label: 'Полезное' },
		{ id: 'place', label: 'Место' }
	]

	const background: LayoutLandingProps['background'] = {
		top: {
			srcSet: bgFlowers.top,
		},
		right: {
			srcSet: bgFlowers.right,
		},
		bottom: {
			srcSet: bgFlowers.bottom,
		},
		left: {
			srcSet: bgFlowers.left,
		},
	};

	return (
		<>
			<LayoutLanding
				menuTabs={MenuTabs}
				background={background}
			>
				<HeroSection className="pt-20 tab:pt-30 desk:pt-50 pb-15 tab:pb-20 desk:pb-25" />
				<DressCode className="py-15 tab:py-20 desk:py-25" />
				<MainInfo className="py-15 tab:py-20 desk:py-25" />
				<Remember className="py-15 tab:py-20 desk:py-25" />
				<Usefull className="py-15 tab:py-20 desk:py-25" />
				<Place className="pt-15 tab:pt-20 desk:pt-25 pb-20 tab:pb-30 desk:pb-50" />
			</LayoutLanding>
			<AudioPlayer
				tracks={[
					{
						src: "./audio/Mumiy-troll_nevesta.mp3",
						title: "Мумий Тролль - Невеста"
					},
					{
						src: "./audio/Naik-Borzov_odna-ona.mp3",
						title: "Найк Борзов - Одна она"
					},
					{
						src: "./audio/Naik-Borzov_loshadka.mp3",
						title: "Найк Борзов - Лошадка"
					},
					{
						src: "./audio/Mumiy-troll_delphini.mp3",
						title: "Мумий Тролль - Дельфины"
					}
				]}
			/>
		</>
	)
}

export default IndexPage

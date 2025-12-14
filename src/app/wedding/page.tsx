import './wedding-page.scss';

import { Layout, AudioPlayer } from '@components';
import { HeroSection, DressCode, MainInfo, Place, Usefull, Remember } from '@blocks';

const IndexPage: React.FC = () => {
	const MenuTabs = [
		{ id: 'intro', label: 'Главная' },
		{ id: 'dresscode', label: 'Дресс-код' },
		{ id: 'main-info', label: 'База' },
		{ id: 'remepber', label: 'Памятка' },
		{ id: 'usefull', label: 'Полезное' },
		{ id: 'place', label: 'Место' }
	]

	return (
		<>
			<div
				className="bg-flowers bg-flowers--top"
			/>
			<div
				className="bg-flowers bg-flowers--right"
			/>
			<div
				className="bg-flowers bg-flowers--bottom"
			/>
			<div
				className="bg-flowers bg-flowers--left"
			/>
			<Layout
				menuTabs={MenuTabs}
			>
				<HeroSection className="pt-20 tab:pt-30 desk:pt-50 pb-15 tab:pb-20 desk:pb-25" />
				<DressCode className="py-15 tab:py-20 desk:py-25" />
				<MainInfo className="py-15 tab:py-20 desk:py-25" />
				<Remember className="py-15 tab:py-20 desk:py-25" />
				<Usefull className="py-15 tab:py-20 desk:py-25" />
				<Place className="pt-15 tab:pt-20 desk:pt-25 pb-20 tab:pb-30 desk:pb-50" />
			</Layout>
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

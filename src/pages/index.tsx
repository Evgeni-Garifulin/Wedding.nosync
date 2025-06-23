import React from 'react';
import type { PageProps } from 'gatsby'

import { Layout } from '@components';
import { HeroSection, DressCode, MainInfo, Place, Usefull, Remember } from '@blocks';

const IndexPage: React.FC<PageProps> = () => {
	const MenuTabs = [
		{ id: 'intro', label: 'Главная' },
		{ id: 'dresscode', label: 'Дресс-код' },
		{ id: 'main-info', label: 'База' },
		{ id: 'remember', label: 'Памятка' },
		{ id: 'usefull', label: 'Полезное' },
		{ id: 'place', label: 'Место' }
	]

	return (
		<Layout
			title='Свадьба Агнеты и Жени'
			description='Приглашаем Вас на нашу свадьбу! Мы будем рады видеть Вас в этот важный для нас день!'
			keywords='Свадьба, Агнета, Женя, фитоняшка, красавица, свадьба в Кургане, Курган'
			image='/preview/og-image.png'
			menuTabs={MenuTabs}
		>
			<HeroSection />
			<DressCode />
			<MainInfo />
			<Remember />
			<Usefull />
			<Place />
		</Layout>
	)
}

export default IndexPage

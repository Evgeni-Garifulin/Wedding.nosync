import React from 'react';
import type { PageProps } from 'gatsby'

import { Layout } from '@components';
import { HeroSection, DressCode, MainInfo, Place, Usefull } from '@blocks';

const IndexPage: React.FC<PageProps> = () => {


	return (
		<Layout
			title='Свадьба Агнеты и Жени'
			description='Приглашаем Вас на нашу свадьбу! Мы будем рады видеть Вас в этот важный для нас день!'
			keywords='Свадьба, Агнета, Женя, фитоняшка, красавица, свадьба в Кургане, Курган'
			image='/preview/og-image.png'
		>
			<HeroSection />
			<DressCode />
			<MainInfo />
			<Place />
			<Usefull />
		</Layout>
	)
}

export default IndexPage

import React from 'react';
import type { PageProps } from 'gatsby'

import { Layout } from '@components';
import { HeroSection } from '@blocks';

const IndexPage: React.FC<PageProps> = () => {


	return (
		<Layout
			title='Свадьба Агнеты и Жени ❤️'
			description='Приглашаем Вас на нашу свадьбу! Мы будем рады видеть Вас в этот важный для нас день! Пожалуйста, посмотрите станичку и заполните форму RSVP.'
			keywords='Свадьба, Агнета, Женя, фитоняшка, красавица, свадьба в Кургане'
			image='/preview/og-image.png'
		>
			<HeroSection />
		</Layout>
	)
}

export default IndexPage

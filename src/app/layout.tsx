import '@styles/index.scss';

import type { Metadata } from 'next';
import { neucha, arvo } from '@ui/fonts/localFonts';

export interface LayoutProps {
	children: React.ReactNode;
}

export const metadata: Metadata = {
	metadataBase: new URL('https://wiwiwiuwawa.ru'),
	title: 'Свадьба Агнеты и Жени',
	description: 'Приглашаем Вас на нашу свадьбу! Мы будем рады видеть Вас в этот важный для нас день!',
	keywords: ['Свадьба', 'Агнета', 'Женя', 'фитоняшка', 'красавица', 'свадьба в Кургане', 'Курган'],
	openGraph: {
		title: 'Свадьба Агнеты и Жени',
		description: 'Приглашаем Вас на нашу свадьбу! Мы будем рады видеть Вас в этот важный для нас день!',
		images: ['/preview/og-image.jpg'],
		type: 'website',
	},
	icons: {
		icon: [
			{ url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
			{ url: '/favicon.svg', type: 'image/svg+xml' },
		],
		shortcut: '/favicon.ico',
		apple: '/apple-touch-icon.png',
	},
	manifest: '/site.webmanifest',
	other: {
		'apple-mobile-web-app-title': 'WIwiwiUwawa',
		'msapplication-TileColor': '#F8F8F9',
	},
};

export const viewport = {
	width: 'device-width',
	initialScale: 1,
	viewportFit: 'cover',
};

export default function RootLayout({
	children,
}: LayoutProps) {
	return (
		<html lang="ru" className={`${neucha.variable} ${arvo.variable}`}>
			<head />
			<body>
				{children}
			</body>
		</html>
	);
};

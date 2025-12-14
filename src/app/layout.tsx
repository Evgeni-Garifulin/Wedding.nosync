import '@styles/index.scss';

import type { Metadata } from 'next';

export const metadata: Metadata = {
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
			{ url: '/favicon/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
			{ url: '/favicon/favicon.svg', type: 'image/svg+xml' },
		],
		shortcut: '/favicon/favicon.ico',
		apple: '/favicon/apple-touch-icon.png',
	},
	manifest: '/favicon/site.webmanifest',
	other: {
		'apple-mobile-web-app-title': 'Mokka',
		'msapplication-TileColor': '#F8F8F9',
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="ru">
			<head>
				<base href="/" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				<link
					href="/sprite/monotone.svg"
					rel="preload"
					as="image"
					type="image/svg+xml"
				/>
			</head>
			<body>
				{children}
			</body>
		</html>
	);
}

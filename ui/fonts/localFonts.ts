import localFont from 'next/font/local';

/**
 * Main Neucha font (Regular).
 * Used via CSS variable --font-neucha.
 */
export const neucha = localFont({
	variable: '--font-neucha',
	src: [
		{ path: '/Neucha.woff2', weight: '400', style: 'normal' },
	],
	preload: true,
	adjustFontFallback: 'Arial',
});

/**
 * Main Arvo font (Bold).
 * Used via CSS variable --font-arvo.
 */
export const arvo = localFont({
	variable: '--font-arvo',
	src: [{ path: '/Arvo-Bold.woff2', weight: '700', style: 'normal' }],
	preload: true,
	adjustFontFallback: 'Arial',
});

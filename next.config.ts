import type { NextConfig } from 'next';
import path from 'path';

export const nextConfig: NextConfig = {
	reactStrictMode: true,
	sassOptions: {
		includePaths: [path.join(__dirname, 'src/styles')],
		additionalData: `@use "vars" as *;`,
	},
	webpack: (config) => {
		// Добавляем алиасы для импортов
		config.resolve.alias = {
			...config.resolve.alias,
			'@blocks': path.resolve(__dirname, 'src/blocks'),
			'@components': path.resolve(__dirname, 'src/components'),
			'@hooks': path.resolve(__dirname, 'src/hooks'),
			'@styles': path.resolve(__dirname, 'src/styles'),
			'@ui': path.resolve(__dirname, 'ui'),
		};
		return config;
	},
};

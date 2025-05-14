import type { GatsbyConfig } from "gatsby";
import path from "path";

const config: GatsbyConfig = {
	plugins: [
		`gatsby-plugin-sass`,
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-plugin-alias-imports`,
			options: {
				alias: {
					'@blocks': path.resolve(__dirname, 'src/blocks'),
					'@components': path.resolve(__dirname, 'src/components'),
					'@hooks': path.resolve(__dirname, 'src/hooks'),
					'@styles': path.resolve(__dirname, 'src/styles'),
					'@static': path.resolve(__dirname, 'static'),
				},
				extensions: [".ts", ".tsx", ".js", ".jsx", ".scss"],
			},
		},
	],
};

export default config;
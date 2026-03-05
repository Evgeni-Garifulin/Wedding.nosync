import type { NextConfig } from 'next';
import path from 'path';

// Hint to disable AVIF image not supported warning
const originalStderrWrite = process.stderr.write.bind(process.stderr);

process.stderr.write = ((chunk, ...args) => {
	if (chunk.toString().includes('AVIF image not supported')) {
		return true;
	}

	return originalStderrWrite(chunk, ...(args as [encoding?: BufferEncoding, cb?: (err?: Error | null | undefined) => void]));
});

const nextConfig: NextConfig = {
	turbopack: {
		resolveAlias: {
			'@blocks': 'src/blocks',
			'@components': 'src/components',
			'@hooks': 'src/hooks',
			'@styles': 'src/styles',
			'@ui': 'ui',
		},
	},
	reactStrictMode: true,
	sassOptions: {
		includePaths: [path.join(__dirname, 'src/styles')],
	},
};

export default nextConfig;
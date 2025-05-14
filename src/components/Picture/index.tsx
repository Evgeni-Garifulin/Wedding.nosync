import React from 'react';

interface PictureProps {
	avif?: boolean;
	webp?: boolean;
	loading?: 'lazy' | 'eager';
	alt?: string;
	width?: string;
	height?: string;
	className?: string;
	pictureProps?: React.HTMLProps<HTMLPictureElement>;
	imgProps?: React.HTMLProps<HTMLImageElement>;
	srcSet: { [key: string]: string };
}

// Функция для определения MIME-типа изображения по расширению
const getImageType = (src: string): string => {
	if (src.endsWith('.png')) return 'image/png';
	if (src.endsWith('.jpg') || src.endsWith('.jpeg')) return 'image/jpeg';
	return ''; // Можно добавить обработку для других типов
};

const Picture: React.FC<PictureProps> = ({
	avif = true,
	webp = true,
	loading = 'lazy',
	alt,
	width,
	height,
	className,
	pictureProps,
	imgProps,
	srcSet
}) => {
	const pictureClass = className || 'picture__image-container';

	const imageType = getImageType(srcSet.img1x);

	return (
		<picture className={pictureClass} {...pictureProps}>
			{/* AVIF sources */}
			{avif && srcSet.avif1x && (
				<source
					media="(max-width: 600px)"
					srcSet={`${srcSet.avif1x} 1x, ${srcSet.avif2x || ''} 2x`}
					type="image/avif"
				/>
			)}
			{avif && srcSet.avif1x && srcSet.avif2x && (
				<source
					media="(min-width: 601px)"
					srcSet={`${srcSet.avif1x} 1x, ${srcSet.avif2x} 2x`}
					type="image/avif"
				/>
			)}

			{/* WebP sources */}
			{webp && srcSet.webp1x && (
				<source
					media="(max-width: 600px)"
					srcSet={`${srcSet.webp1x} 1x, ${srcSet.webp2x || ''} 2x`}
					type="image/webp"
				/>
			)}
			{webp && srcSet.webp1x && srcSet.webp2x && (
				<source
					media="(min-width: 601px)"
					srcSet={`${srcSet.webp1x} 1x, ${srcSet.webp2x} 2x`}
					type="image/webp"
				/>
			)}

			{/* Default (PNG or JPEG) sources */}
			<source
				media="(max-width: 600px)"
				srcSet={`${srcSet.img1x} 1x, ${srcSet.img2x || ''} 2x`}
				type={imageType}
			/>
			<source
				media="(min-width: 601px)"
				srcSet={`${srcSet.img1x} 1x, ${srcSet.img2x || ''} 2x`}
				type={imageType}
			/>

			{/* Fallback img */}
			<img
				src={srcSet.img1x}
				srcSet={srcSet.img2x ? `${srcSet.img1x} 1x, ${srcSet.img2x} 2x` : undefined}
				alt={alt}
				width={width}
				height={height}
				loading={loading}
				className="picture__image"
				{...imgProps}
			/>
		</picture>
	);
};

export default Picture;

import cn from 'classnames';

export type SrcSetType = {
	img1x: string;
	webp1x?: string;
	avif1x?: string;
	img2x?: string;
	webp2x?: string;
	avif2x?: string;
};

type PictureSourcesProps = {
	srcSet: SrcSetType;
	maxWidth?: number;
};

export interface ImageProps extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'srcSet' | 'src'> {
	pictureProps?: React.HTMLAttributes<HTMLPictureElement>;
	srcSet: SrcSetType | { [key: string]: SrcSetType } | string;
	alt?: string;
}

const getImageType = (src: string): string => {
	const ext = src.match(/\.([a-zA-Z]+)(?=[?#]|$)/)?.[1]?.toLowerCase();
	if (ext === 'png') return 'image/png';
	if (ext === 'jpg' || ext === 'jpeg') return 'image/jpeg';
	return '';
};

const isNestedSrcSet = (
	srcSet: SrcSetType | { [key: string]: SrcSetType } | string,
): srcSet is { [key: string]: SrcSetType } => {
	return (
		typeof srcSet === 'object' &&
		Object.values(srcSet)[0] !== undefined &&
		typeof Object.values(srcSet)[0] === 'object'
	);
};

const buildDensitySrcSet = (url1x?: string, url2x?: string): string => {
	if (!url1x && !url2x) return '';
	const parts = [];
	if (url1x) parts.push(`${(url1x)} 1x`);
	if (url2x) parts.push(`${(url2x)} 2x`);
	return parts.join(', ');
};

const PictureSources: React.FC<PictureSourcesProps> = ({ srcSet, maxWidth }) => {
	const mediaProps = maxWidth ? { media: `(max-width: ${maxWidth}px)` } : {};
	return (
		<>
			{(srcSet.avif1x || srcSet.avif2x) && (
				<source {...mediaProps} srcSet={buildDensitySrcSet(srcSet.avif1x, srcSet.avif2x)} type="image/avif" />
			)}
			{(srcSet.webp1x || srcSet.webp2x) && (
				<source {...mediaProps} srcSet={buildDensitySrcSet(srcSet.webp1x, srcSet.webp2x)} type="image/webp" />
			)}
			<source
				{...mediaProps}
				srcSet={`${(srcSet.img1x)} 1x${srcSet.img2x ? `, ${(srcSet.img2x)} 2x` : ''}`}
				type={getImageType(srcSet.img1x)}
			/>
		</>
	);
};

export const Picture: React.FC<ImageProps> = ({
	srcSet,
	pictureProps = {},
	alt = '',
	className,
	loading = 'lazy',
	...props
}) => {
	if (typeof srcSet === 'string') {
		return (
			<img
				src={(srcSet)}
				alt={alt}
				className={cn('picture__image', className)}
				loading={loading}
				{...props}
			/>
		);
	}

	// TODO update all images and remove this condition
	if (!isNestedSrcSet(srcSet)) {
		return (
			<picture {...pictureProps} className={cn('picture__image-container', pictureProps.className)}>
				{(srcSet.avif1x || srcSet.avif2x) && (
					<source srcSet={buildDensitySrcSet(srcSet.avif1x, srcSet.avif2x)} type="image/avif" />
				)}
				{(srcSet.webp1x || srcSet.webp2x) && (
					<source srcSet={buildDensitySrcSet(srcSet.webp1x, srcSet.webp2x)} type="image/webp" />
				)}
				<source
					srcSet={`${(srcSet.img1x)} 1x${srcSet.img2x ? `, ${(srcSet.img2x)} 2x` : ''}`}
					type={getImageType(srcSet.img1x)}
				/>
				<img
					src={(srcSet.img1x)}
					{...(srcSet.img2x ? { srcSet: `${(srcSet.img2x)} 2x` } : {})}
					alt={alt}
					className={cn('picture__image', className)}
					loading={loading}
					{...props}
				/>
			</picture>
		);
	}

	const sortedEntries = Object.entries(srcSet).sort(([keyA], [keyB]) => {
		if (Number.isNaN(+keyA)) return -1;
		if (Number.isNaN(+keyB)) return 1;
		return +keyA < +keyB ? -1 : 1;
	});

	const [defaultSrcSet, ...restSrcSet] = sortedEntries;
	const largestSrcSet = sortedEntries[sortedEntries.length - 1][1];

	return (
		<picture {...pictureProps} className={cn('picture__image-container', pictureProps.className)}>
			<PictureSources
				srcSet={defaultSrcSet[1]}
				maxWidth={restSrcSet.length > 0 ? +restSrcSet[0][0] : undefined}
			/>
			{restSrcSet.map(([key, itemSrcSet], index, array) => (
				<PictureSources
					key={key}
					srcSet={itemSrcSet}
					maxWidth={array[index + 1] ? +array[index + 1][0] : undefined}
				/>
			))}
			<img
				src={(largestSrcSet.img1x)}
				{...(largestSrcSet.img2x ? { srcSet: `${(largestSrcSet.img2x)} 2x` } : {})}
				alt={alt}
				loading={loading}
				className={cn('picture__image', className)}
				{...props}
			/>
		</picture>
	);
};

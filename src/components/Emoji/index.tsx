import React from 'react';
import cn from 'classnames';

import './emoji.scss';

export interface EmojiProps extends React.ImgHTMLAttributes<HTMLImageElement> {
	name: string;
	className?: string;
	size?: React.CSSProperties['height'];
	block?: boolean;
}

const Emoji: React.FC<EmojiProps> = ({ name, block, className = '', size = '1em', ...props }) => {
	const src = `/emoji/${name}.png`;

	return (
		<img
			src={src}
			alt={`:${name}:`}
			className={cn('emoji', block ? 'emoji--block' : 'emoji--inline', className)}
			loading="lazy"
			style={{ height: size }}
			{...props}
		/>
	);
};

export default Emoji;

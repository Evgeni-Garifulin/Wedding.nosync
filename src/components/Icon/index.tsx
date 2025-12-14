import './icon.scss';
import cn from 'classnames';
import { sprite } from '@ui/sprite';

const monotone = [
	'line-a',
	'line-b',
	'circle',
	'triangle-right',
	'apple',
	'arrow-left',
	'arrow-right',
	'book',
	'book-clean',
	'burger',
	'calculator',
	'calendar',
	'change',
	'check-circle',
	'check-solid',
	'chevrone-down',
	'chevrone-left',
	'chevrone-right',
	'chevrone-top',
	'close',
	'close-circle',
	'copy',
	'cross',
	'download',
	'eye',
	'eye-off',
	'facebook',
	'filter',
	'full-screen',
	'google',
	'google-play',
	'huawei-app',
	'idea',
	'infinity',
	'instagram',
	'link',
	'linkedin',
	'list-bullet',
	'list-bullet-sm',
	'magic-wand',
	'math-operations',
	'more',
	'more-alt',
	'plus',
	'ring',
	'rocket',
	'samsung-app',
	'search',
	'share',
	'sort',
	'star',
	'text',
	'twitter',
	'user',
	'warning',
	'web',
	'whatsapp',
	'x',
] as const;

export interface IconNames {
	monotone: (typeof monotone)[number];
}

export interface IconProps {
	name: IconNames['monotone'];
	className?: string;
	width?: React.CSSProperties['width'];
	height?: React.CSSProperties['height'];
	color?: React.CSSProperties['color'];
}

export const Icon: React.FC<IconProps> = ({ name, className, width, height, color, ...props }) => {
	return (
		<svg className={cn('icon', className)} style={{ height: height, width: width, color: color }} {...props}>
			<use href={`${sprite}#${String(name)}`} />
		</svg>
	);
};


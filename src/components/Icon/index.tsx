import './icon.scss';
import React from 'react';
import cn from 'classnames';

interface IconProps extends React.SVGAttributes<SVGSVGElement> {
	name: string;
	className?: string;
	size?: React.CSSProperties['height'];
	color?: React.CSSProperties['color'];
}

const Icon: React.FC<IconProps> = ({ name, className = '', size = '20px', color, ...props }) => {
	return (
		<svg className={cn('icon', className)} fill={color} style={{ height: size, fill: color }} {...props}>
			<use href={`/sprite/sprite.svg#${name}`} />
		</svg>
	);
};

export default Icon;

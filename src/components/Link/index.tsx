import './link.scss';
import cn from 'classnames';
import { type TextProps } from '@components/Typography/Text';
import { type } from 'os';

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
	children: React.ReactNode;
	className?: string;
	type?: 'clear' | 'underline';
	color?: TextProps['color'];
	font?: TextProps['font'];
	italic?: TextProps['italic'];
	props?: React.AnchorHTMLAttributes<HTMLAnchorElement>;
}

export const Link: React.FC<LinkProps> = ({ href, children, className, type, color, font, italic, ...props }) => {
	const ClassName = cn('link', {
		'link--clear': type === 'clear',
		'link--underline': type === 'underline',
	}, className);

	const style = {
		color: color,
		fontFamily: font,
		fontStyle: italic ? 'italic' : 'normal',
	}

	return (
		<a href={href} className={ClassName} style={style} {...props}>{children}</a>
	);
};

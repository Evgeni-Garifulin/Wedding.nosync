export interface TypographyProps extends React.PropsWithChildren {
	tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'mark' | 'div';
	className?: string;
	color?: 'light' | 'xlight' | 'contrast' | 'contrast-dark' | 'accent-dark' | 'accent';
	italic?: boolean;
}

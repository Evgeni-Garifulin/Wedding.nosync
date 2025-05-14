import './frame.scss';
import React from 'react';
import cn from 'classnames';

/**
 * Свойства компонента `Frame`.
 *
 * @property {'xs' | 'sm' | 'lg' | 'xl' | 'xxl'} [size] - Размер компонента, задаёт внутренние отступы.
 * @property {'dark' | 'green' | 'white-10' | 'tranparent' | 'grey-1' | 'grey-2'} [type] - Стиль компонента, задаёт цвет фона.
 * @property {boolean} quarterRound - Скругляет все углы кроме нижнего левого.
 * @property {'40' | '30' | '24'} borderRadius - Радиус скругления углов.
 * @property {string} [className] - Дополнительные CSS-классы для кастомизации стилей.
 * @property {React.ReactNode} children - Дочерние элементы компонента.
 */

type FrameProps = React.PropsWithChildren & {
	tag?: 'div' | 'section' | 'article' | 'aside' | 'li';
	size?: 'xs' | 'sm' | 'lg' | 'xl' | 'xxl';
	type?: 'dark' | 'green' | 'white-10' | 'transparent' | 'grey-1' | 'grey-2';
	textColor?: 'white' | 'dark' | 'green';
	quarterRound?: boolean;
	borderRadius?: '40' | '30' | '24' | '20' | '16';
	noBorder?: boolean;
	className?: string;
}

/**
 * Компонент `Frame` создаёт контейнер с гибкими настройками размеров, стилей и скруглений.
 *
 * @param {FrameProps} props - Свойства компонента.
 * @returns {JSX.Element} Возвращает элемент `div` с применёнными классами.
 *
 * @example
 * // Пример использования компонента Frame
 * <Frame size="lg" type="dark" quarterRound borderRadius="30">
 *   <p>Содержимое фрейма</p>
 * </Frame>
 */

const Frame: React.FC<FrameProps> = ({
	tag = 'div',
	size,
	type,
	textColor,
	quarterRound,
	borderRadius,
	className,
	noBorder,
	children,
}) => {

	const resultClassName = cn(
		'frame',
		{
			[`frame--${size}`]: size,
			[`frame--${type}`]: type,
			[`frame--text-${textColor}`]: textColor,
			['frame--quarter-round']: quarterRound,
			['frame--no-border']: noBorder,
			[`frame--br-${borderRadius}`]: borderRadius,
		},
		className,
	);

	const Tag = tag;

	return (
		<Tag className={resultClassName}>
			{children}
		</Tag>
	);
};

export default Frame;

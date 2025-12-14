import './list.scss';

import cn from 'classnames';
import { Text, type TextProps } from '@components/Typography/Text';
import { Icon } from '@components/Icon';

type IconType = 'list-bullet' | 'star' | 'check-circle' | 'check-solid' | 'number';

interface ListItem {
	id?: string;
	text: string;
	className?: string;
}

export interface ListProps {
	items: ListItem[];
	iconType?: IconType;
	className?: string;
	color?: TextProps['color'];
	alignItems?: 'top';
	numberWithLeadingZero?: boolean;
}

export const List: React.FC<ListProps> = async ({
	items,
	iconType,
	className,
	color,
	alignItems,
	numberWithLeadingZero = false,
}) => {
	const isNumberIcon = iconType === 'number';
	const ListTag = isNumberIcon ? 'ol' : 'ul';

	const classes = cn('list', className, {
		'list--ordered': isNumberIcon,
		'list--ordered-with-leading-zero': isNumberIcon && numberWithLeadingZero,
		[`color-${color}`]: color,
	});
	return (
		<ListTag className={classes}>
			{items
				.map(({ text, id, className: itemClassName }) => (
					<li
						key={id || text as string}
						id={id}
						className={cn(
							'list__item',
							{ 'list__item--align-top': alignItems === 'top', 'list__item--with-icon': iconType },
							itemClassName,
						)}
					>
						{iconType && iconType !== 'number' && (
							<Icon name={iconType} width={16} height={16} color="red" />
						)}
						<Text dangerouslySetInnerHTML={{ __html: text }} />
					</li>
				))}
		</ListTag>
	);
};

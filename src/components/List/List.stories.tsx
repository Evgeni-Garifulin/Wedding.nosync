import '@ui/assets/styles/mainFDS.scss';

import type { Meta } from '@storybook/react';
import { COLORS } from '@ui/assets/styles/constants/colors';

import List from '.';

export const meta: Meta<typeof List> = {
	title: 'components/List',
	tags: ['autodocs'],
	argTypes: {
		iconType: {
			control: 'select',
			options: ['bullet', 'star', 'check', 'number'],
			description: 'Icon type for the list',
		},
		color: {
			control: 'select',
			options: COLORS,
			description: 'Text/icon color',
		},
		iconColor: {
			control: 'select',
			options: COLORS,
			description: 'Icon color for each list item',
		},
		alignItems: {
			control: 'select',
			options: ['top', undefined],
			description: 'Vertical alignment',
		},
		className: {
			control: 'text',
			description: 'Additional CSS class',
		},
		items: {
			control: 'object',
			description: 'List items',
		},
		badge: {
			control: 'text',
			description: 'Global badge for all list items (optional)',
		},
	},
	args: {
		iconType: 'check',
		color: 'blue',
		iconColor: 'blue',
		alignItems: 'top',
		className: '',
		items: [
			{ id: '1', text: 'Fast registration' },
			{ id: '2', text: '24/7 live chat support', badge: 'NEW' },
			{ id: '3', text: 'Multi-currency IBAN' },
		],
	},
};

export default {
	component: List,
};

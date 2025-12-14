'use client';

import { useCountdown } from '@hooks';

export interface CounterProps {
	targetDate: string;
	expiredText: string;
	font?: 'arvo' | 'neucha';
	color?: 'accent' | 'black';
	tag?: 'span' | 'p';
	className?: string;
}

export const Counter: React.FC<CounterProps> = ({ targetDate, expiredText, font = 'arvo', color = 'accent', tag = 'span', className }) => {
	const timeLeft = useCountdown(targetDate);
	const Tag = tag;

	const formatNumber = (num: number): string => {
		return num.toString().padStart(2, '0');
	};


	const formatCountdown = () => {
		if (timeLeft.isExpired) {
			return <Tag color={color} className={className}>{expiredText}</Tag>
		}

		const parts = [];
		if (timeLeft.days > 0) parts.push(`${timeLeft.days} /`);
		if (timeLeft.hours > 0 || timeLeft.days > 0) parts.push(`${formatNumber(timeLeft.hours)} :`);
		if (timeLeft.minutes > 0 || timeLeft.hours > 0 || timeLeft.days > 0) parts.push(`${formatNumber(timeLeft.minutes)} :`);
		parts.push(`${formatNumber(timeLeft.seconds)}`);

		return parts.join(' ');
	};

	return (
		<Tag color={color} className={className} style={{ fontVariantNumeric: 'tabular-nums' }}>
			{formatCountdown()}
		</Tag>
	);
};
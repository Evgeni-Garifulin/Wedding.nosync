import { useState, useEffect } from 'react';

interface TimeLeft {
	days: number;
	hours: number;
	minutes: number;
	seconds: number;
	isExpired: boolean;
}

const useCountdown = (targetDate: string): TimeLeft => {
	const [timeLeft, setTimeLeft] = useState<TimeLeft>({
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0,
		isExpired: false
	});

	useEffect(() => {
		const target = new Date(targetDate).getTime();

		const calculateTimeLeft = () => {
			const now = new Date().getTime();
			const difference = target - now;

			if (difference <= 0) {
				setTimeLeft({
					days: 0,
					hours: 0,
					minutes: 0,
					seconds: 0,
					isExpired: true
				});
				return;
			}

			const days = Math.floor(difference / (1000 * 60 * 60 * 24));
			const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
			const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
			const seconds = Math.floor((difference % (1000 * 60)) / 1000);

			setTimeLeft({
				days,
				hours,
				minutes,
				seconds,
				isExpired: false
			});
		};

		calculateTimeLeft();
		const timer = setInterval(calculateTimeLeft, 1000);

		return () => clearInterval(timer);
	}, [targetDate]);

	return timeLeft;
};

export default useCountdown;

import React, { useState, useRef, useEffect } from 'react';
import './audio-player.scss';

import { Text } from '@components';
import cn from 'classnames';

interface AudioPlayerProps {
	src: string;
	title?: string;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ src, title = "Мумий Тролль - Невеста" }) => {
	const [isPlaying, setIsPlaying] = useState(false);
	const [duration, setDuration] = useState(0);
	const [currentTime, setCurrentTime] = useState(0);
	const [isScrolled, setIsScrolled] = useState(false);
	const audioRef = useRef<HTMLAudioElement>(null);

	const togglePlayPause = () => {
		if (audioRef.current) {
			if (isPlaying) {
				audioRef.current.pause();
			} else {
				audioRef.current.play();
			}
			setIsPlaying(!isPlaying);
		}
	};

	const formatTime = (time: number) => {
		const minutes = Math.floor(time / 60);
		const seconds = Math.floor(time % 60);
		return `${minutes}:${seconds.toString().padStart(2, '0')}`;
	};

	useEffect(() => {
		const audio = audioRef.current;
		if (!audio) return;

		const updateTime = () => setCurrentTime(audio.currentTime);
		const updateDuration = () => setDuration(audio.duration);

		audio.addEventListener('timeupdate', updateTime);
		audio.addEventListener('loadedmetadata', updateDuration);

		return () => {
			audio.removeEventListener('timeupdate', updateTime);
			audio.removeEventListener('loadedmetadata', updateDuration);
		};
	}, []);

	useEffect(() => {
		const handleScroll = () => {
			const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
			setIsScrolled(scrollTop > 0);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<div className={cn('audio-player', { 'audio-player--scrolled': isScrolled },
		{ 'audio-player--playing': isPlaying }
		)}>
			<audio
				ref={audioRef}
				src={src}
				preload="auto"
				loop
			/>

			<div className="audio-player__content">
				<button
					className="audio-player__play-btn"
					onClick={togglePlayPause}
				>
					{isPlaying ? (
						<img src="/icons/pause.svg" alt="выкл" width="40" height="40" className="audio-player__play-btn-icon" />
					) : (

						<img src="/icons/play.svg" alt="вкл" width="40" height="40" className="audio-player__play-btn-icon" />
					)}
				</button>

				<div className="audio-player__info">
					<div className="audio-player__title">{title}</div>
					<div className="audio-player__time">
						{formatTime(currentTime)} / {formatTime(duration)}
					</div>
				</div>
				<Text tag="span" className="audio-player__download">
					<a
						href={src}
						download={src}
						target="_blank"
						rel="noopener noreferrer"
					>
						Скачать песню
					</a>
				</Text>
			</div>
			<img
				src="/icons/turn-on.svg"
				alt="Включи"
				className="audio-player__arrow"
				width="60"
				height="60"
			/>
		</div>
	);
};

export default AudioPlayer;
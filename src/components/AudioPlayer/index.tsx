import React, { useState, useRef, useEffect } from 'react';
import './audio-player.scss';

import { Text } from '@components';
import cn from 'classnames';

interface AudioTrack {
	src: string;
	title: string;
}

interface AudioPlayerProps {
	tracks: AudioTrack[];
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ tracks }) => {
	const [isPlaying, setIsPlaying] = useState(false);
	const [duration, setDuration] = useState(0);
	const [currentTime, setCurrentTime] = useState(0);
	const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
	const [shuffledTracks, setShuffledTracks] = useState<AudioTrack[]>([]);
	const audioRef = useRef<HTMLAudioElement>(null);

	// Функция для перемешивания массива
	const shuffleArray = (array: AudioTrack[]) => {
		const shuffled = [...array];
		for (let i = shuffled.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
		}
		return shuffled;
	};

	// Перемешиваем треки при инициализации
	useEffect(() => {
		setShuffledTracks(shuffleArray(tracks));
	}, [tracks]);

	const currentTrack = shuffledTracks[currentTrackIndex];

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

	const nextTrack = () => {
		const nextIndex = (currentTrackIndex + 1) % shuffledTracks.length;
		setCurrentTrackIndex(nextIndex);
		setCurrentTime(0);
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
		const handleEnded = () => {
			nextTrack();
		};

		audio.addEventListener('timeupdate', updateTime);
		audio.addEventListener('loadedmetadata', updateDuration);
		audio.addEventListener('ended', handleEnded);

		return () => {
			audio.removeEventListener('timeupdate', updateTime);
			audio.removeEventListener('loadedmetadata', updateDuration);
			audio.removeEventListener('ended', handleEnded);
		};
	}, [currentTrackIndex, shuffledTracks.length]);

	// Автовоспроизведение при смене трека
	useEffect(() => {
		if (audioRef.current && isPlaying) {
			audioRef.current.play();
		}
	}, [currentTrackIndex]);

	// Если треки еще не перемешаны, не рендерим плеер
	if (shuffledTracks.length === 0 || !currentTrack) {
		return null;
	}

	return (
		<div className={cn('audio-player',
			{ 'audio-player--playing': isPlaying }
		)}>
			<audio
				ref={audioRef}
				src={currentTrack.src}
				preload="auto"
			/>

			<div className="audio-player__content">
				<button
					className="audio-player__play-btn"
					onClick={togglePlayPause}
				>
					{isPlaying ? (
						<img
							src="/icons/pause-button.svg"
							alt="выкл"
							width="40"
							height="40"
							loading="eager"
							className="audio-player__play-btn-icon"
						/>
					) : (
						<img
							src="/icons/play-button.svg"
							alt="вкл"
							width="40"
							height="40"
							loading="eager"
							className="audio-player__play-btn-icon"
						/>
					)}
				</button>

				<div className="audio-player__info">
					<div className="audio-player__title">
						{currentTrack.title}
						<span className="audio-player__track-counter">
							({currentTrackIndex + 1}/{shuffledTracks.length})
						</span>
					</div>
					<div className="audio-player__time">
						{formatTime(currentTime)} / {formatTime(duration)}
					</div>
				</div>
				<Text tag="span" className="audio-player__download">
					<a
						href={currentTrack.src}
						download={currentTrack.src}
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
				loading="lazy"
				width="60"
				height="60"
			/>
		</div>
	);
};

export default AudioPlayer;
import React from 'react';
import './usefull.scss';

import { Text, Section } from '@components';

const Usefull: React.FC = () => {

	return (
		<Section id="usefull" title="Полезные ссылки:">
			<ul className="usefull__list">
				<li className="usefull__item usefull__item--telegram-channel">
					<Text tag="span">
						<a href="https://t.me/+PbOq45ueX-9lYzE6" target="_blank" rel="noopener noreferrer">
							Общий канал в Телеграмм
						</a>
					</Text>
				</li>
				<li className="usefull__item usefull__item--telegram-zhenya">
					<Text tag="span">
						<a href="https://t.me/evgeni_garifulin" target="_blank" rel="noopener noreferrer">
							Телеграмм Жени
						</a>
					</Text>
				</li>
				<li className="usefull__item usefull__item--telegram-agneta">
					<Text tag="span">
						<a href="https://t.me/voytovich_agn" target="_blank" rel="noopener noreferrer">
							Телеграмм Агнеты
						</a>
					</Text>
				</li>
				<li className="usefull__item usefull__item--pdf">
					<Text tag="span">
						<a
							href="/pdf/Priglashenie_pdf.pdf"
							download="Приглашение_на_свадьбу.pdf"
							target="_blank"
							rel="noopener noreferrer"
						>
							PDF для тех, кому важно
						</a>
					</Text>
				</li>
				<li className="usefull__item usefull__item--weather">
					<Text tag="span">
						<a
							href="https://www.google.com/search?q=погода+курган+3+июня+2025"
							target="_blank"
							rel="noopener noreferrer"
						>
							Погода на 3 июня
						</a>
					</Text>
				</li>
			</ul>
			<Text>
				В будущем добавится ссылка на фото с праздника
			</Text>
		</Section>
	);
};

export default Usefull;
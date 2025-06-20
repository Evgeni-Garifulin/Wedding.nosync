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
							Общий канал в&nbsp;Телеграмм
						</a>
					</Text>
				</li>
				<li className="usefull__item usefull__item--telegram-zhenya">
					<Text tag="span">
						<a href="https://t.me/evgeni_garifulin" target="_blank" rel="noopener noreferrer">
							Телеграм Жени
						</a>
					</Text>
				</li>
				<li className="usefull__item usefull__item--telegram-agneta">
					<Text tag="span">
						<a href="https://t.me/voytovich_agn" target="_blank" rel="noopener noreferrer">
							Телеграм Агнеты
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
							href="https://www.google.com/search?q=погода+курган+3+июля+2025"
							target="_blank"
							rel="noopener noreferrer"
						>
							Погода на&nbsp;3&nbsp;июля
						</a>
					</Text>
				</li>
				<li className="usefull__item usefull__item--pivo">
					<Text tag="span">
						<a
							href="https://www.google.com/search?q=Курганский+пивоваренный+завод"
							target="_blank"
							rel="noopener noreferrer"
						>
							Чем заняться в&nbsp;Кургане
						</a>
					</Text>
				</li>
			</ul>
			<Text>
				В&nbsp;будущем добавится ссылка на&nbsp;фото с&nbsp;праздника
			</Text>
		</Section>
	);
};

export default Usefull;
import React from 'react';
import './main-info.scss';

import { Title, Text, Section, Button } from '@components';

const MainInfo: React.FC = () => {

	return (
		<Section id="main-info" title="Если вы думаете - что подарить?">
			<Text>
				Мы&nbsp;будем очень рады, если вы&nbsp;подарите деньги (проверять не будем). Ваша помощь поможет нам создать незабываемый праздник и&nbsp;сделать этот день особенным для всех гостей.
			</Text>
			<Title size="h2">
				Наши пожелания для вас:
			</Title>

			<Text>
				Если вы&nbsp;хотите подарить цветы (лучше все таки подарить)&nbsp;&mdash; можно принести 3-5-7 цветочков без обертки, которые мы&nbsp;используем для стилизации <br /><br />
			</Text>
			<Text>
				Расцветка для цветов:
			</Text>
			<ul className="main-info__flowers">
				<li className="main-info__flower main-info__flower--white">
					<Text tag="span">Белый</Text>
					<img
						src="/icons/flower-1.svg"
						alt="Белый цветок>"
						loading="lazy"
						width={50}
						height={100}
					/>
				</li>
				<li className="main-info__flower main-info__flower--green">
					<Text tag="span">Зеленый</Text>
					<img
						src="/icons/flower-2.svg"
						alt="Зеленый цветок"
						loading="lazy"
						width={50}
						height={100}
					/>
				</li>
				<li className="main-info__flower main-info__flower--pink">
					<Text tag="span">Светло-розовый</Text>
					<img
						src="/icons/flower-3.svg"
						alt="Светло розовый цветок"
						loading="lazy"
						width={50}
						height={100}
					/>
				</li>
			</ul>

			<Text>
				И пожалуйста, пройдите опрос в&nbsp;группе. Вы&nbsp;нам очень поможете!
			</Text>

			<Button size="lg" block href="https://t.me/+PbOq45ueX-9lYzE6" target="_blank" rel="noopener noreferrer">
				Канал в Телеграмм
			</Button>
		</Section>
	);
};

export default MainInfo;
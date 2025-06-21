import React from 'react';
import './remember.scss';

import { Text, Section, Picture } from '@components';

import agneta from '@static/img/agneta/agneta';

const MainInfo: React.FC = () => {

	return (
		<Section id="remember" title="Памятка!">
			<Text>
				Мы&nbsp;все люди, и&nbsp;в&nbsp;это день давайте уважать друг друга. Поэтому мы&nbsp;просим:
			</Text>
			<ul className="list">
				<li>Просим обойтись без &laquo;Горько&raquo;, просьб станцевать или участвовать в&nbsp;конкурсах&nbsp;&mdash; мы&nbsp;сами решим, что и&nbsp;как хотим сделать.</li>
				<li>Если вы&nbsp;увидели что одного из&nbsp;виновников нет со&nbsp;всеми, не&nbsp;переживайте, просто это очень изматывающее события, нужно немного отдыха всем</li>
				<li>Давайте проведем вечер без телефона. На&nbsp;входе будет стоять коробка, куда мы&nbsp;попросим сложить гаджеты. На&nbsp;свадьбе будет профессиональный фотограф, прекрасных снимков хватит всем.</li>
				<li>Тосты приветствуются, но&nbsp;лучше заранее подумать что сказать. Краткость&nbsp;&mdash; сестра таланта!</li>
				<li>Не&nbsp;переживайте, если вы&nbsp;не&nbsp;смогли приехать, мы&nbsp;все понимаем</li>
			</ul>
			<Text className="remember__warning">
				Правила обязательны, иначе вы&nbsp;рискуете увидеть вот такое (никому не&nbsp;пожелаю):
			</Text>
			<div className="remember__image-wrapper">
				<Picture
					srcSet={agneta}
					alt="Агнета"
					width="871"
					height="1016"
					loading="lazy"
					className="remember__image"
				/>
				<img
					src="/icons/arrow.svg"
					alt="указатель на Агнету"
					className="remember__arrow"
					width="100"
					height="80"
					loading="lazy"
				/>
			</div>
			<Text tag="span" className="remember__download">
				<a
					href="/img/agneta/orig/agneta.png"
					download="agneta.png"
					target="_blank"
					rel="noopener noreferrer"
				>
					Скачать котика
				</a>
			</Text>
		</Section>
	);
};

export default MainInfo;
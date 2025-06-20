import React from 'react';
import './dresscode.scss';

import { Section, Text, Title } from '@components';

const DressCode: React.FC = () => {
	console.log('DressCode render');

	// Теплые тона (5 цветов)
	const warmTones = [
		{ color: '#EFD2CA' }, // светло-персиковый
		{ color: '#E9C9BE' }, // бежево-персиковый
		{ color: '#D4AE9B' }, // бежевый
		{ color: '#B48770' }, // коричневато-бежевый
		{ color: '#F5B895' }, // персиково-оранжевый
	];

	// Желтые/кремовые тона (5 цветов)
	const yellowCreamTones = [
		{ color: '#F5F0E2' }, // кремовый
		{ color: '#F2E6D0' }, // бежево-кремовый
		{ color: '#E8D5B7' }, // песочно-кремовый
		{ color: '#FDF5C4' }, // очень светло-желтый
		{ color: '#F7E8A4' }, // светло-желтый
	];

	// Нейтральные тона (5 цветов)
	const neutralTones = [
		{ color: '#E8E8E8' }, // очень светло-серый
		{ color: '#D0D0D0' }, // светло-серый
		{ color: '#B8B8B8' }, // средне-серый
		{ color: '#A5A5A5' }, // темно-серый
		{ color: '#C7C7BD' }, // серо-бежевый
	];

	// Зеленые тона (5 цветов)
	const greenTones = [
		{ color: '#C8D1A8' }, // светло-зеленый
		{ color: '#B3B5A0' }, // желто-зеленый
		{ color: '#8FA598' }, // средне-зеленый
		{ color: '#657163' }, // темно-зеленый
		{ color: '#404B43' }, // очень темно-зеленый
	];

	// Бирюзовые тона (5 цветов)
	const turquoiseTones = [
		{ color: '#C8D6D3' }, // светло-бирюзовый
		{ color: '#A4C4BE' }, // средний бирюзовый
		{ color: '#8CAD9A' }, // близкий бирюзовый
		{ color: '#7A9B95' }, // темно-бирюзовый
		{ color: '#6B8A85' }, // очень темно-бирюзовый
	];

	const allColors = [
		...warmTones,
		...yellowCreamTones,
		...neutralTones,
		...greenTones,
		...turquoiseTones,
	];

	console.log('Colors count:', allColors.length);

	return (
		<Section id="dresscode" title="Гамма:">
			<Text>
				Мы&nbsp;будем очень рады, если вы&nbsp;поддержите нашу цветовую гамму в&nbsp;своих нарядах. Выберите любой из&nbsp;представленных оттенков&nbsp;&mdash; от&nbsp;нежных бежевых до&nbsp;глубоких зеленых тонов. Это поможет создать гармоничную и&nbsp;элегантную атмосферу нашего праздника.
			</Text>

			<Text>
				Теплые тона
			</Text>

			<div className="dresscode__category">
				<div className="dresscode__colors">
					{warmTones.map((colorItem) => (
						<div
							key={`warm-${colorItem.color}`}
							className="dresscode__color"
							style={{ backgroundColor: colorItem.color }}
							data-color={colorItem.color}
						/>
					))}
				</div>
			</div>

			<Text>
				Желтые/кремовые тона
			</Text>

			<div className="dresscode__category">
				<div className="dresscode__colors">
					{yellowCreamTones.map((colorItem) => (
						<div
							key={`yellow-${colorItem.color}`}
							className="dresscode__color"
							style={{ backgroundColor: colorItem.color }}
							data-color={colorItem.color}
						/>
					))}
				</div>
			</div>

			<Text>
				Нейтральные тона
			</Text>

			<div className="dresscode__category">
				<div className="dresscode__colors">
					{neutralTones.map((colorItem) => (
						<div
							key={`neutral-${colorItem.color}`}
							className="dresscode__color"
							style={{ backgroundColor: colorItem.color }}
							data-color={colorItem.color}
						/>
					))}
				</div>
			</div>

			<Text>
				Зеленые тона
			</Text>

			<div className="dresscode__category">
				<div className="dresscode__colors">
					{greenTones.map((colorItem) => (
						<div
							key={`green-${colorItem.color}`}
							className="dresscode__color"
							style={{ backgroundColor: colorItem.color }}
							data-color={colorItem.color}
						/>
					))}
				</div>
			</div>

			<Text>
				Бирюзовые тона
			</Text>

			<div className="dresscode__category">
				<div className="dresscode__colors">
					{turquoiseTones.map((colorItem) => (
						<div
							key={`turquoise-${colorItem.color}`}
							className="dresscode__color"
							style={{ backgroundColor: colorItem.color }}
							data-color={colorItem.color}
						/>
					))}
				</div>
			</div>
			<Title size="h2">
				Дресс код:
			</Title>
			<Text>
				Мы&nbsp;приглашаем вас одеться в&nbsp;стиле Modern Formal&nbsp;/ Elegant Minimalismalism&nbsp;&mdash; элегантно, но&nbsp;неформально. Подойдут красивые платья, блузки с&nbsp;юбками или брюками, костюмы в&nbsp;мягких тонах. Главное&nbsp;&mdash; чувствовать себя комфортно и&nbsp;уверенно. Избегайте слишком строгих деловых костюмов и&nbsp;спортивной одежды. <br /><br />
				Подробнее можно спросить <a href="https://t.me/voytovich_agn" target="_blank" rel="noopener noreferrer">Агнету</a>, либо прочитать список ниже:
			</Text>
			<ul className="list">
				<li>Плавные силуэты, чистые линии</li>
				<li>Монохромные и нейтральные цвета: оливковый, бежевый, карамельный, шампань, бронза</li>
				<li>Материалы: сатин, шелк, костюмная ткань, креп, трикотаж с люрексом</li>
				<li>Открытые плечи, разрезы, драпировки — у женщин</li>
				<li>Без галстуков, но со структурой — у мужчин (рубашки, костюмы, брюки чинос)</li>
				<li>Обувь: нейтральная, без излишеств — чаще босоножки, лоферы или белые кеды</li>
			</ul>
		</Section>
	);
};

export default DressCode;
import './remember.scss';

import cn from 'classnames';
import { agneta } from './img/agneta';

import { Text, Section, Picture, Link, List } from '@components';

interface RememberProps {
	className?: string;
}

export const Remember: React.FC<RememberProps> = async ({ className }) => {

	return (
		<Section id="remember" title="Памятка!" className={cn('remember', className)}>
			<Text>
				Мы&nbsp;все люди, и&nbsp;в&nbsp;это день давайте уважать друг друга. Поэтому мы&nbsp;просим:
			</Text>
			<List
				className="mt-2 tab:mt-3 desk:mt-4"
				iconType="check-circle"
				items={[
					{ text: 'Просим обойтись без &laquo;Горько&raquo;, просьб станцевать или участвовать в&nbsp;конкурсах&nbsp;&mdash; мы&nbsp;сами решим, что и&nbsp;как хотим сделать.' },
					{ text: 'Если вы&nbsp;увидели, что одного из&nbsp;виновников нет со&nbsp;всеми, не&nbsp;переживайте, просто это очень изматывающее событие, нужно немного отдыха всем' },
					{ text: 'Давайте проведем вечер без телефона. На&nbsp;входе будет стоять коробка, куда мы&nbsp;попросим сложить гаджеты. На&nbsp;свадьбе будет профессиональный фотограф, прекрасных снимков хватит всем.' },
					{ text: 'Тосты приветствуются, но&nbsp;лучше заранее подумать, что сказать. Краткость&nbsp;&mdash; сестра таланта!' },
					{ text: 'Не&nbsp;переживайте, если вы&nbsp;не&nbsp;смогли приехать, мы&nbsp;все понимаем' },
				]}
			/>
			<Text className="remember__warning mt-2 tab:mt-3 desk:mt-4">
				Правила обязательны, иначе вы&nbsp;рискуете увидеть вот такое (никому не&nbsp;пожелаю):
			</Text>
			<div className="remember__image-wrapper mt-2 tab:mt-3 desk:mt-4">
				<Picture
					srcSet={agneta}
					alt="Агнета"
					width="871"
					height="1016"
					loading="lazy"
					className="remember__image"
				/>
				<img
					src={require('./icons/arrow.svg').default.src}
					alt="указатель на Агнету"
					className="remember__arrow"
					width="100"
					height="80"
					loading="lazy"
				/>
			</div>
			<Text tag="span" className="remember__download mt-2 tab:mt-3 desk:mt-4">
				<Link
					href="./img/agneta.png"
					download="agneta.png"
					target="_blank"
					rel="noopener noreferrer"
				>
					Скачать котика
				</Link>
			</Text>
		</Section>
	);
};

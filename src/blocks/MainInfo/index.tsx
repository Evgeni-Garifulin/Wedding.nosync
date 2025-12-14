import './main-info.scss';

import cn from 'classnames';
import { Title, Text, Section, Button } from '@components';

interface MainInfoProps {
	className?: string;
}

export const MainInfo: React.FC<MainInfoProps> = async ({ className }) => {

	return (
		<Section id="main-info" title="Если вы думаете - что подарить?" className={cn('main-info', className)}>
			<Text>
				Мы&nbsp;будем очень рады, если вы&nbsp;подарите деньги (проверять не будем). Ваша помощь поможет нам создать незабываемый праздник и&nbsp;сделать этот день особенным для всех гостей.
			</Text>

			<Text className="mt-2 tab:mt-3 desk:mt-4">
				Если вы&nbsp;хотите подарить цветы (лучше все таки подарить)&nbsp;&mdash; можно принести 3-5-7 цветочков без обертки, которые мы&nbsp;используем для стилизации <br /><br />
			</Text>
			<Text className="mt-2 tab:mt-3 desk:mt-4">
				Расцветка для цветов:
			</Text>
			<ul className="main-info__flowers mt-2 tab:mt-3 desk:mt-4">
				<li className="main-info__flower main-info__flower--white">
					<Text tag="span">Белый</Text>
					<img
						src={require('./icons/flower-1.svg').default.src}
						alt="Белый цветок>"
						loading="lazy"
						width={50}
						height={100}
					/>
				</li>
				<li className="main-info__flower main-info__flower--green">
					<Text tag="span">Зеленый</Text>
					<img
						src={require('./icons/flower-2.svg').default.src}
						alt="Зеленый цветок"
						loading="lazy"
						width={50}
						height={100}
					/>
				</li>
				<li className="main-info__flower main-info__flower--pink">
					<Text tag="span">Светло-розовый</Text>
					<img
						src={require('./icons/flower-3.svg').default.src}
						alt="Светло розовый цветок"
						loading="lazy"
						width={50}
						height={100}
					/>
				</li>
			</ul>

			<Text className="mt-2 tab:mt-3 desk:mt-4">
				И пожалуйста, пройдите опрос в&nbsp;группе. Вы&nbsp;нам очень поможете!
			</Text>

			<Button size="lg" block href="https://t.me/+PbOq45ueX-9lYzE6" target="_blank" rel="noopener noreferrer" className="mt-2 tab:mt-3 desk:mt-4">
				Канал в Телеграм
			</Button>
		</Section>
	);
};
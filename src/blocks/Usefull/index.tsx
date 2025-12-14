import './usefull.scss';

import cn from 'classnames';
import { Text, Section, Link } from '@components';

interface UsefullProps {
	className?: string;
}

export const Usefull: React.FC<UsefullProps> = async ({ className }) => {

	return (
		<Section id="usefull" title="Полезные ссылки:" className={cn('usefull', className)}>
			<ul className="usefull__list mt-2 tab:mt-3 desk:mt-4">
				<li className="usefull__item usefull__item--telegram-channel">
					<Text tag="span">
						<Link href="https://t.me/+PbOq45ueX-9lYzE6" target="_blank" rel="noopener noreferrer">
							Общий канал в&nbsp;Телеграмм
						</Link>
					</Text>
				</li>
				<li className="usefull__item usefull__item--telegram-zhenya">
					<Text tag="span">
						<Link href="https://t.me/evgeni_garifulin" target="_blank" rel="noopener noreferrer">
							Телеграм Жени
						</Link>
					</Text>
				</li>
				<li className="usefull__item usefull__item--telegram-agneta">
					<Text tag="span">
						<Link href="https://t.me/voytovich_agn" target="_blank" rel="noopener noreferrer">
							Телеграм Агнеты
						</Link>
					</Text>
				</li>
				<li className="usefull__item usefull__item--pdf">
					<Text tag="span">
						<Link
							href="/pdf/Priglashenie_pdf.pdf"
							download="Приглашение_на_свадьбу.pdf"
							target="_blank"
							rel="noopener noreferrer"
						>
							PDF для тех, кому важно
						</Link>
					</Text>
				</li>
				<li className="usefull__item usefull__item--weather">
					<Text tag="span">
						<Link
							href="https://www.google.com/search?q=погода+курган+3+июля+2025"
							target="_blank"
							rel="noopener noreferrer"
						>
							Погода на&nbsp;3&nbsp;июля
						</Link>
					</Text>
				</li>
				<li className="usefull__item usefull__item--pivo">
					<Text tag="span">
						<Link
							href="https://www.google.com/search?q=Курганский+пивоваренный+завод"
							target="_blank"
							rel="noopener noreferrer"
						>
							Чем заняться в&nbsp;Кургане
						</Link>
					</Text>
				</li>
			</ul>
			<Text>
				В&nbsp;будущем добавится ссылка на&nbsp;фото с&nbsp;праздника
			</Text>
		</Section>
	);
};
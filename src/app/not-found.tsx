import './not-found.scss';

import { LayoutLanding, Title, Link } from '@components';

export default function NotFound() {
	return (
		<LayoutLanding>
			<Title size='h1'>404. Такой страницы не найдено <br /> <Link href="/">Пожалуйста перейдите на главную страницу</Link></Title>
		</LayoutLanding>
	);
}

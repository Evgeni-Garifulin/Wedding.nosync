import './not-found.scss';

import { Layout, Title, Link } from '@components';

export default function NotFound() {
	return (
		<Layout className="not-found">
			<Title size='h1'>404. Такой страницы не найдено <br /> <Link href="/">Пожалуйста перейдите на главную страницу</Link></Title>
		</Layout>
	);
}

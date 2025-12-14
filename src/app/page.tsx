import { Layout, Link } from '@components';

export default function NotFound() {
	return (
		<Layout className="not-found">
			<Link href="/wedding">Пожалуйста перейдите на страницу свадьбы</Link>
		</Layout>
	);
}

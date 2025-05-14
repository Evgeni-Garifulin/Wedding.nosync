import React from 'react'

import HeadBase from '../HeadBase';
import Meta from '../Meta';
import Footer from '../Footer';
import Header from '../Header';

import '@styles/index.scss';

export interface LayoutProps {
	children: React.ReactNode;
	description?: string;
	image?: string;
	title?: string;
	keywords?: string;
}

const Layout: React.FC<LayoutProps> = ({
	children,
	description,
	image,
	title,
	keywords,
}) => (
	<>
		<HeadBase />
		<Meta
			description={description}
			image={image}
			title={title}
			keywords={keywords}
		/>
		<Header />
		<main id='main' className='main'>
			<div className="container">
				{children}
			</div>
		</main>
		<Footer />
	</>
);
export default Layout;

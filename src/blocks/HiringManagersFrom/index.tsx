import './hiring-managers-from.scss';

import React from 'react';
import { useResponsive } from '@hooks';
import { Section, Title } from '@components';

const HiringManagersFrom: React.FC = () => {
	const {
		isMobile,
		isTabletSm,
		isDesktop
	} = useResponsive();

	const partners = ['dell', 'gett', 'ibm', 'intel', 'pwc'];

	const displayedPartners = isMobile || isTabletSm ? [...partners, ...partners] : partners;

	return (
		<Section
			id="hiring-managers-from"
			className="hiring-managers-from"
		>
			<Title
				size={isDesktop ? "h4" : "h5"}
				tag="h2"
				className="hiring-managers-from__title"
			>
				Built by&nbsp;talent leaders and hiring managers from:
			</Title>

			<div className="hiring-managers-from__wrapper">
				<ul className="hiring-managers-from__list">
					{displayedPartners.map((partner, index) => (
						<li key={index} className="hiring-managers-from__item">
							<img
								src={`./img/partners/${partner}-logo.svg`}
								width="116"
								height="40"
								loading="eager"
								alt={`${partner} company logo`}
							/>
						</li>
					))}
				</ul>
			</div>
		</Section>
	);
};

export default HiringManagersFrom;

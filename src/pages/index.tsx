import React, { useEffect } from 'react';
import type { PageProps } from 'gatsby'

import { Layout, CalendarWidget } from '@components';
import {
	HeroSection,
	HiringManagersFrom,
	HowIsMokkaDifferent,
	GoalToFindTalent,
	WhatTalentLeaderSay,
	WhatCandidatesSay,
	FeedbackSection
} from '@blocks';

const IndexPage: React.FC<PageProps> = () => {
	useEffect(() => {
		const initializeModal = () => {
			const modal = document.querySelector<HTMLElement>('.calendly-inline-widget-wrapper');
			const openModalButtons = document.querySelectorAll<HTMLButtonElement>('.btn-open-modal');

			if (modal) {
				openModalButtons.forEach((button) => {
					button.addEventListener('click', () => {
						modal.classList.add('calendly-inline-widget-wrapper--opened');
						document.body.classList.add('body-lock');
					});
				});

				modal.addEventListener('click', (event) => {
					if (modal.classList.contains('calendly-inline-widget-wrapper--opened')) {
						const target = event.target as HTMLElement;

						if (target === modal) {
							modal.classList.remove('calendly-inline-widget-wrapper--opened');
							document.body.classList.remove('body-lock');
						}
					}
				});
			}
		};

		initializeModal();
	}, []);

	return (
		<Layout
			title='Mokka | AI for talent teams'
			description='Streamline hiring with Mokka: automate screening calls and resume reviews to save 50%+ of your team’s time. Identify top talent using an evidence-based approach while improving candidate experience. Built by hiring managers and talent leaders from Dell, IBM, Intel, PwC, Gett.'
			keywords='AI recruitment, hiring automation, evidence-based hiring tools, candidate screening, resume screening, data-driven hiring, ATS integration, recruiter efficiency, unbiased hiring, automated hiring solutions, talent acquisition tools, scalable recruitment, performance-based hiring, candidate experience platform, AI for interviews, AI assistant recruitment, screening automation, hiring productivity, resume reviews'
			image='/preview/og-image.png'
		>
			<HeroSection />
			<HiringManagersFrom />
			<GoalToFindTalent />
			<HowIsMokkaDifferent />
			<FeedbackSection />
			<WhatTalentLeaderSay />
			<WhatCandidatesSay />
			<CalendarWidget />
		</Layout>
	)
}

export default IndexPage

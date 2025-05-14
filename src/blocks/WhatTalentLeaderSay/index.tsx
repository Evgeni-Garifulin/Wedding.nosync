import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { useResponsive } from '@hooks';
import { Section, Testimonials, SlidePrevButton, SlideNextButton } from '@components';
import './what-talent-leader-say.scss';

import 'swiper/css';
import 'swiper/css/pagination';

const testimonialsData = [
	{
		type: 'primary',
		picture: 'efratDagan',
		title: 'Mokka doesn&rsquo;t just solve a&nbsp;problem, it&nbsp;empowers talent teams to&nbsp;do&nbsp;their best work.',
		description:
			'Automating the grunt work lets recruiters focus on&nbsp;what matters most: connecting with top talent.',
		name: 'Efrat Dagan',
		position: 'Founder &amp;&nbsp;CEO',
		company: 'WorkAround, ex&nbsp;Lyft, Google',
	},
	{
		type: 'secondary',
		picture: 'enikoSzokol',
		title: 'Transformed our hiring process!',
		description:
			'We&nbsp;used to&nbsp;spend hours manually reviewing resumes and conducting initial screenings, with Mokka, we&rsquo;ve reclaimed over&nbsp;50% of&nbsp;our team&rsquo;s time, allowing&nbsp;us to&nbsp;focus on&nbsp;candidate relationship and strategic tasks.',
		name: 'Enikő Szokol',
		position: 'Head of&nbsp;Talent Acquisition',
		company: 'TheSoul Publishing',
	},
	{
		type: 'secondary',
		picture: 'haiHarari',
		title: 'Scale intelligently',
		description:
			'Mokka doesn&rsquo;t just make recruitment faster&mdash;it makes it&nbsp;smarter. No&nbsp;fluff, just real results for teams who need to&nbsp;scale intelligently.',
		name: 'Hai Harari',
		position: 'People Analytics leader',
		company: 'Intuit, Intel',
	},
	{
		type: 'secondary',
		picture: 'yogevGoldis',
		title: 'Aligns with the future of work',
		description:
			'Mokka aligns perfectly with the future of&nbsp;work: data-driven, efficient, and focused on&nbsp;both recruiter and candidate experience. It&rsquo;s not just another tool; it&rsquo;s a&nbsp;step forward.',
		name: 'Yogev Goldis',
		position: 'VP HR',
		company: 'Komodor',
	},
	{
		type: 'secondary',
		picture: 'kristinaKutasova',
		title: 'Ensures no&nbsp;talent is&nbsp;left unseen',
		description:
			'We&nbsp;often overlooked top-tier candidates because we&nbsp;simply couldn&rsquo;t process the entire funnel. Mokka helps ensure no&nbsp;talent is&nbsp;left unseen, making our hiring process far more inclusive and efficient.',
		name: 'Kristina Kutasova',
		position: 'Talent Acquisition Manager',
		company: 'Palta',
	},
	{
		type: 'primary',
		picture: 'mandeepBajwa',
		title: 'Mokka addresses one of&nbsp;the biggest challenges in&nbsp;recruitment:',
		description:
			'scaling talent acquisition without sacrificing quality. Its ability to&nbsp;automate screening and provide data-driven insights is&nbsp;exactly what teams need today.',
		name: 'Mandeep Bajwa',
		position: 'EVP People',
		company: 'Stuart, ex&nbsp;WeWork, Gett',
	},
	{
		type: 'secondary',
		picture: 'kerstinRothermel',
		title: 'A&nbsp;game-changer!',
		description:
			'Its evidence-based ranking system gives unparalleled insight into the entire candidate funnel, helping eliminate bias and consistently make better hiring decisions.',
		name: 'Kerstin Rothermel',
		position: 'Chief People Officer',
		company: 'Bolt, Flix, Stepstone',
	},
	{
		type: 'secondary',
		picture: 'tomGuy',
		title: 'Efficiency + Candidate UX = 🚀',
		description:
			'Recruitment tools often focus solely on&nbsp;efficiency, but Mokka uniquely improves candidate experience while streamlining the process. This combination is&nbsp;incredibly rare and valuable.',
		name: 'Tom Guy',
		position: 'Senior Talent Partner',
		company: 'Elements, ex&nbsp;Kraken, N26',
	},
	{
		type: 'primary',
		picture: 'anatAssaf',
		title: 'Mokka eliminates the guesswork in&nbsp;hiring',
		description:
			'Mokka eliminates guesswork in&nbsp;hiring by&nbsp;surfacing the most qualified candidates based on&nbsp;evidence, not bias. For any company committed to&nbsp;quality, efficiency and diversity, it&rsquo;s a&nbsp;no-brainer.',
		name: 'Anat Assaf',
		position: 'Global Talent Leader',
		company: 'Microsoft',
	},
	{
		type: 'secondary',
		picture: 'alexandraRegueros',
		title: 'Candidates love&nbsp;it!',
		description:
			'Our candidates consistently rave about the smooth and engaging experience Mokka provides&nbsp;&mdash; a&nbsp;game-changer compared to&nbsp;assessment tools. The platform ensures every applicant gets a&nbsp;fair shot while helping&nbsp;us identify top talent faster.',
		name: 'Alexandra Regueros',
		position: 'HR Business Partner',
		company: 'TSP',
	},
	{
		type: 'secondary',
		picture: 'veronikaMikhailova',
		title: 'A&nbsp;smart and efficient helper!',
		description:
			'Mokka is&nbsp;an&nbsp;excellent solution for recruiters, especially when managing a&nbsp;high volume of&nbsp;applications. It&nbsp;not only saves valuable time but also ensures no&nbsp;candidate is&nbsp;overlooked, even in&nbsp;high-demand scenarios.',
		name: 'Veronika Mikhailova',
		position: 'Talent Recruiter',
		company: 'Palta',
	},
];

const WhatTalentLeaderSay: React.FC = () => {
	const {
		isTablet,
		isDesktop,
	} = useResponsive();

	const feedbackSlider = useRef<any>(null);


	const renderSlides = () => {
		if (isTablet || isDesktop) {
			const mobileSlides = [];
			for (let i = 0; i < testimonialsData.length; i++) {
				if (testimonialsData[i].type === 'secondary' && testimonialsData[i + 1] && testimonialsData[i + 1].type === 'secondary') {
					mobileSlides.push(
						<SwiperSlide key={i}>
							<div className="what-talent-leader-say__column ">
								<Testimonials {...testimonialsData[i]} />
								<Testimonials {...testimonialsData[i + 1]} />
							</div>
						</SwiperSlide>
					);
					i++; // Skip the next item as it is already included in the current slide
				} else {
					mobileSlides.push(
						<SwiperSlide key={i}>
							<Testimonials {...testimonialsData[i]} />
						</SwiperSlide>
					);
				}
			}
			return mobileSlides;
		} else {
			return testimonialsData.map((item, index) => (
				<SwiperSlide key={index}>
					<Testimonials {...item} />
				</SwiperSlide>
			));
		}
	};
	return (
		<Section
			id="testimonials"
			className="what-talent-leader-say"
			title="What talent leaders say?"
		>
			<div className="what-talent-leader-say__body">
				<Swiper
					modules={[Pagination]}
					pagination={{ clickable: true }}
					onSwiper={(swiper) => (feedbackSlider.current = swiper)}
					spaceBetween={24}
					slidesPerView={3}
					autoplay={{
						delay: 1000,
						disableOnInteraction: false,
					}}
					breakpoints={{
						0: {
							slidesPerView: 1.001,
							spaceBetween: 8,
						},
						767: {
							slidesPerView: 2,
							spaceBetween: 16,
						},
						1140: {
							slidesPerView: 3,
						},
					}}
					loop={true}
				>
					{renderSlides()}
				</Swiper>

				<SlidePrevButton swiperRef={feedbackSlider} />
				<SlideNextButton swiperRef={feedbackSlider} />
			</div>
		</Section>
	);
};

export default WhatTalentLeaderSay;

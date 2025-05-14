import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import { Emoji, Section, Title, Frame, Text, Icon, SlidePrevButton, SlideNextButton } from '@components'
import { useResponsive } from '@hooks';
import theSoulPublishing from './theSoulPublishing.svg'

import 'swiper/css';
import 'swiper/css/pagination';
import './feedbackSection.scss'

const FeedbackSection: React.FC = () => {
	const {
		isDesktop,
	} = useResponsive();

	const feedbackSlider = useRef<any>(null);

	const data = [
		{
			logo: theSoulPublishing,
			percent: "-80%",
			chips: [
				"Won back 3-4h per recruiter/day",
				"Reliably found top candidates",
				"4.5 candidate experience rating"
			],
			teamFeedback: [
				"Huge time-saver for recruiters",
				"Saves time for hiring managers",
				"Straight to best candidates, go deeper during interviews",
				"Reliably identifies top candidates with minimal setup efforts"
			],
			aboutCompany: [
				"Digital media publisher",
				"2 000+ employees, HQ: EU, operations across 70 countries"
			]
		},
		{
			percent: "-88%",
			chips: [
				"Screen time down from 9 to 3 days",
				"Talent access from 10% to 100%",
				"4.6 candidate experience rating"
			],
			teamFeedback: [
				"More motivated candidates",
				"Easy to read reports. Helpful summaries",
				"More meaningful Interviews: deeper on soft skills, etc.",
				"Able to access entire pipeline of 500+ applicants per role"
			],
			aboutCompany: [
				"Global travel tech player",
				"1 500 employees, HQ: US, operations across EMEA"
			]
		},
		{
			percent: "-70%",
			chips: [
				"Won ca. 40-50% time back",
				"Reliable identified top candidates",
				"4.4 candidate experience rating"
			],
			teamFeedback: [
				"Helped screen out irrelevant candidates quickly",
				"Past performance framework new but very helpful",
				"Experience in the health tech is important and Mokka checks this automatically"
			],
			aboutCompany: [
				"Leading UK health tech player",
				"1 000 employees, HQ: UK, global presence"
			]
		}
	]

	return (
		<Section
			id="feedback-section"
			className="feedback-section"
			title="Case study"
		>
			<div className="inner">
				<Swiper
					modules={[Pagination]}
					pagination={{ clickable: true }}
					onSwiper={(swiper) => (feedbackSlider.current = swiper)}
					breakpoints={{
						0: {
							spaceBetween: 8
						},
						900: {
							spaceBetween: 16,
						},
					}}
					slidesPerView={1.001}
					loop={true}
				>
					{data.map((item, index) => (
						<SwiperSlide key={index}>
							<Frame size="xxl" tag="article" className="feedback">
								<div className="feedback__top">
									<div className="feedback__caption">
										<Text className="feedback__label" size="p1" tag="h2">
											<Icon name="arrow-down" size={20} />
											Reduction in screening effort
										</Text>

										<Title
											size={isDesktop ? "h1" : "h2"}
											tag="p"
										>
											{item.percent}
										</Title>
									</div>

									{item.logo && (
										<div className="feedback__logo">
											<img src={item.logo} alt="" />
										</div>
									)}
								</div>

								<ul className="feedback__chips-list">
									{item.chips.map((item, index) => (
										<Frame size="sm" type="grey-1" key={index} className="feedback__chips-item" tag="li">
											<Emoji name="glowing-star" size={32} />

											<Text size="p1">
												{item}
											</Text>
										</Frame>
									))}
								</ul>

								<div className="feedback__description">
									{isDesktop ? (
										<Title size="h3">
											TA&nbsp;team feedback on&nbsp;Mokka
										</Title>
									) : (
										<Text
											size="p1"
											tag="h3"
											weight="semibold"
										>
											TA&nbsp;team feedback on&nbsp;Mokka
										</Text>
									)}
									<ul className="feedback__list list">
										{item.teamFeedback.map((item, index) => (
											<li key={index} className="feedback__item">
												<Text
													size={isDesktop ? "p1" : "p2"}
												>
													{item}
												</Text>
											</li>
										))}
									</ul>

									{isDesktop ? (
										<Title size="h3">
											About company
										</Title>
									) : (
										<Text
											size="p1"
											tag="h3"
											weight="semibold"
										>
											About company
										</Text>
									)}

									<ul className="feedback__list list">
										{item.aboutCompany.map((item, index) => (
											<li key={index} className="feedback__item">
												<Text
													size={isDesktop ? "p1" : "p2"}
												>
													{item}
												</Text>
											</li>
										))}
									</ul>
								</div>
							</Frame>
						</SwiperSlide>
					))}
				</Swiper>

				<SlidePrevButton swiperRef={feedbackSlider} />
				<SlideNextButton swiperRef={feedbackSlider} />
			</div>
		</Section>
	)
}

export default FeedbackSection
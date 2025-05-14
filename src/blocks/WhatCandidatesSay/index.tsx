import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { useResponsive } from '@hooks';
import { Section, Title, Text, Emoji, Icon, Frame, SlidePrevButton, SlideNextButton } from '@components';
import reviews from './data';

import 'swiper/css';
import 'swiper/css/pagination';
import './what-candidates-say.scss';

const WhatCandidatesSay: React.FC = () => {
	const {
		isMobile,
		isDesktop
	} = useResponsive();

	const whatCandidatesSaySlider = React.useRef<any>(null);

	return (
		<Section
			id="what-candidates-say"
			className="what-candidates-say"
			title={
				<>
					<Emoji name="star-struck" size={isDesktop ? 36 : 32} />{" "}
					Candidates enjoy Mokka, rate&nbsp;it{" "}
					<Emoji name="star" size={isDesktop ? 36 : 32} />{" "}
					4.5
				</>
			}
			wide
		>
			<div className="what-candidates-say__slider">
				<Swiper
					modules={[Pagination]}
					pagination={{ clickable: true }}
					onSwiper={(swiper) => (whatCandidatesSaySlider.current = swiper)}
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
					{reviews.map((group, index) => (
						<SwiperSlide key={index}>
							<Frame
								size="xxl"
								className="what-candidates-say__slide"
							>
								<Title size="h3">
									<Emoji className="what-candidates-say__slide-emoji" name={group.emoji} size={36} />
									{group.title}
								</Title>

								<div className="what-candidates-say__reviews">
									{group.list.map((review, index) => (
										<Frame type="grey-2" className="what-candidates-say__review" key={index}>
											<div className="what-candidates-say__review-rating">
												{Array.from({ length: review.rating }).map((_, i) => (
													<Icon key={i} name="star" size={isMobile ? 16 : 24} color="#FFC224" />
												))}
											</div>

											<Text size={isDesktop ? "p1" : "p2"}>{review.text}</Text>

											<Text size="p2" className="what-candidates-say__review-footer"><b>{review.position}</b>, {review.country}</Text>
										</Frame>
									))}
								</div>
							</Frame>
						</SwiperSlide>
					))}
				</Swiper>

				<SlidePrevButton swiperRef={whatCandidatesSaySlider} />
				<SlideNextButton swiperRef={whatCandidatesSaySlider} />
			</div>
		</Section>
	);
};

export default WhatCandidatesSay;
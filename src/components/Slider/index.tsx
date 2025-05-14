import React, { useRef } from "react";
import Icon from "../Icon";

import "./slider.scss";

type SlideButtonProps = {
	swiperRef: React.RefObject<any>;
};

export const SlidePrevButton: React.FC<SlideButtonProps> = ({ swiperRef }) => {
	return (
		<button
			className="slider-nav-button slider-prev-button"
			onClick={() => swiperRef.current?.slidePrev()}
			type="button"
			aria-label="Previous slide"
			aria-disabled="false"
		>
			<Icon name="chevron-left" size={24} className="slider-nav-button__icon" />
		</button>
	);
};

export const SlideNextButton: React.FC<SlideButtonProps> = ({ swiperRef }) => {
	return (
		<button
			className="slider-nav-button slider-next-button"
			onClick={() => swiperRef.current?.slideNext()}
			type="button"
			aria-label="Next slide"
			aria-disabled="false"
		>
			<Icon name="chevron-right" size={24} className="slider-nav-button__icon" />
		</button>
	);
};

import React from 'react';
import cn from 'classnames';
import { useResponsive } from '@hooks';
import { Picture, Title, Text, Frame } from '@components';
import images from '@static/img/what-talent-leader-say/index'

import './testimonials.scss';

interface Image {
	name: string;
}

interface Testimonials {
	type: string;
	picture: string;
	title: string;
	description: string;
	name: string;
	position: string;
	company: string;
}

const Testimonials: React.FC<Testimonials> = ({ type, title, description, name, position, company, picture }) => {
	const image = images.find((img: Image) => img.name === picture);

	const {
		isDesktop,
	} = useResponsive();

	if (!image) return;

	return (
		<Frame className={cn("testimonial", [`testimonial--${type}`])} size="sm">
			{type === 'primary' ? (
				<>
					<Picture
						srcSet={image}
						alt={name}
						className="testimonial-column__image"
					/>
					<div className="testimonial-column__inner">
						<Frame
							type="white-10"
							className="testimonial-column__message"
							size="sm"
							noBorder
							quarterRound
						>
							<Title
								size={isDesktop ? "h4" : "h5"}
								tag="h3"
								weight="semibold"
								color="contrast"
								className="testimonial-column__title"
								dangerouslySetInnerHTML={{ __html: title }}
							/>
							<Text
								size={isDesktop ? "p1" : "p2"}
								className="testimonial-column__description"
								color="xlight"
								dangerouslySetInnerHTML={{ __html: description }}
							/>
						</Frame>
						<div className="testimonial-column__additional">
							<Title
								size="h5"
								tag="p"
								color="contrast"
								dangerouslySetInnerHTML={{ __html: name }}
							/>
							<Text
								size="p1"
								className="testimonial-column__footer-company"
								color="xlight"
							>
								<span dangerouslySetInnerHTML={{ __html: position }} /> at{' '}
								<Text
									size="p1"
									weight="semibold"
									tag="span"
									color="contrast"
									dangerouslySetInnerHTML={{ __html: company }}
								/>
							</Text>
						</div>
					</div>
				</>
			) : (
				<>
					<Frame
						type="grey-2"
						className="testimonial__message"
						size="xs"
						noBorder
						quarterRound
					>
						<Title
							size="h5"
							tag="h3"
							className="testimonial__title"
							dangerouslySetInnerHTML={{ __html: title }}
						/>
						<Text
							size="p2"
							className="testimonial__description"
							dangerouslySetInnerHTML={{ __html: description }}
						/>
					</Frame>
					<div className="testimonial__additional">
						<Picture
							srcSet={image}
							alt={name}
							width="70"
							height="70"
							className="testimonial__image"
						/>
						<div className="testimonial__additional-text">
							<Text
								size="p1"
								weight="semibold"
								dangerouslySetInnerHTML={{ __html: name }}
							/>
							<Text
								size="p2"
							>
								<Text
									size="p2"
									tag="span"
									dangerouslySetInnerHTML={{ __html: position }}
								/>
								<br />
								at
								{' '}
								<Text
									size="p2"
									tag="span"
									weight="semibold"
									dangerouslySetInnerHTML={{ __html: company }}
								/>
							</Text>
						</div>
					</div>
				</>
			)}
		</Frame>
	);
};

export default Testimonials;

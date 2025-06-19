import React, { useEffect, useRef, useState } from "react";
import cn from "classnames";
import { useResponsive } from "@hooks";
import Logo from "../Logo";
import Button from "../Button";

import "./header.scss";

const Header: React.FC = () => {
	const { isDesktop } = useResponsive();

	const [isScrolled, setIsScrolled] = useState(false);
	const [bgStyle, setBgStyle] = useState<{ width: string; transform: string; display: string }>({
		width: "0",
		transform: "translate(0, 0)",
		display: "none",
	});

	const navListRef = useRef<HTMLUListElement | null>(null);
	const sections = ["intro", "problems", "solution", "testimonials"];
	const sectionRefs = useRef<HTMLElement[]>([]);

	useEffect(() => {
		sectionRefs.current = sections
			.map((id) => document.getElementById(id))
			.filter((section): section is HTMLElement => section !== null);

		const handleScroll = () => {
			const scrollThreshold = isDesktop ? 50 : 6;
			setIsScrolled(window.scrollY > scrollThreshold);

			let activeSection = "";

			for (const section of sectionRefs.current) {
				const { top, bottom } = section.getBoundingClientRect();

				if (window.scrollY === 0) {
					activeSection = "intro";
					break;
				}

				if (top <= 620 && bottom >= 520) {
					activeSection = section.id;
					break;
				}
			}

			if (activeSection && navListRef.current) {
				const activeNavItem = navListRef.current.querySelector(
					`.page-header__nav-item a[href="#${activeSection}"]`
				)?.parentElement as HTMLElement;

				if (activeNavItem) {
					const { offsetLeft, offsetWidth } = activeNavItem;
					const parentPaddingLeft = parseFloat(
						getComputedStyle(navListRef.current).paddingLeft || "0"
					);

					setBgStyle({
						width: `${offsetWidth}px`,
						transform: `translate(${offsetLeft - parentPaddingLeft}px, 0)`,
						display: "block",
					});
				}
			} else {
				setBgStyle({ width: "0", transform: "translate(0, 0)", display: "none" });
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [isDesktop]);

	const resetBgPosition = () => {
		setBgStyle({ width: "0", transform: "translate(0, 0)", display: "none" });
	};

	const setBgPosition = (target: HTMLElement) => {
		if (!navListRef.current) return;

		const { offsetLeft, offsetWidth } = target;
		const parentPaddingLeft = parseFloat(
			getComputedStyle(navListRef.current).paddingLeft || "0"
		);

		setBgStyle({
			width: `${offsetWidth}px`,
			transform: `translate(${offsetLeft - parentPaddingLeft}px, 0)`,
			display: "block",
		});
	};

	return (
		<header className={cn('page-header', { "page-header--scrolled": isScrolled })}>
			<div className="page-header__content">
				<div className="page-header__logo">
					<Logo type="emblem" className="page-header__logo-emblem" />
					<Logo type="label" className="page-header__logo-label" />
				</div>

				<nav className="page-header__nav">
					<ul
						className="page-header__nav-list"
						ref={navListRef}
						onMouseLeave={resetBgPosition}
					>
						{["Intro", "Problems", "Solution", "Testimonials"].map((item, index) => (
							<li
								key={index}
								className="page-header__nav-item"
								onMouseEnter={(e) => setBgPosition(e.currentTarget)}
							>
								<a href={`#${item.toLowerCase()}`} className="page-header__link">
									{item}
								</a>
							</li>
						))}
					</ul>
					<div className="page-header__nav-item-bg" style={bgStyle} />
				</nav>

				<div className="page-header__actions">
					<Button className="btn-open-modal">Я точно хочу пойти</Button>
				</div>
			</div>
		</header>
	);
};

export default Header;
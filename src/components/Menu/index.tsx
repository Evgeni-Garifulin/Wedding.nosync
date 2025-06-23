import React, { useState, useRef } from 'react';

import { useResponsive } from '@hooks';
import cn from 'classnames';
import './menu.scss';

import { Text } from '@components';

interface MenuTab {
	id: string;
	label: string;
	content?: React.ReactNode;
}

interface MenuProps {
	tabs: MenuTab[];
	defaultActiveTab?: string;
	className?: string;
}

const Menu: React.FC<MenuProps> = ({
	tabs,
	defaultActiveTab,
	className
}) => {
	const { isDesktop, isMobile, isTablet } = useResponsive();
	const navRef = useRef<HTMLUListElement>(null);
	const elementRef = useRef<HTMLDivElement | null>(null);
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [activeTab, setActiveTab] = useState(defaultActiveTab || tabs[0]?.id);
	const [hoveredTab, setHoveredTab] = useState<string | null>(null);
	const [bgStyle, setBgStyle] = useState<{ width: string; height: string; transform: string; display: string }>({
		width: "0",
		height: "0",
		transform: "translate(0, 0)",
		display: "none",
	});

	const resetBgPosition = () => {
		setBgStyle({ width: "0", height: "0", transform: "translate(0, 0)", display: "none" });
		setHoveredTab(null);
	};

	const setBgPosition = (target: HTMLElement, tabId: string) => {
		if (!navRef.current) return;

		const { offsetLeft, offsetWidth, offsetHeight, offsetTop } = target;
		const parentPaddingLeft = parseFloat(
			getComputedStyle(navRef.current).paddingLeft || "0"
		);
		const parentPaddingTop = parseFloat(
			getComputedStyle(navRef.current).paddingTop || "0"
		);

		if (isDesktop) {
			setBgStyle({
				width: `${offsetWidth}px`,
				height: `auto`,
				transform: `translate(${offsetLeft - parentPaddingLeft}px, 0) scale(1.54)`,
				display: "flex",
			});
		} else {
			setBgStyle({
				width: `auto`,
				height: `${offsetHeight}px`,
				transform: `translate(0, ${offsetTop - parentPaddingTop}px) scale(1.14)`,
				display: "flex",
			});
		}
		setHoveredTab(tabId);
	};

	const clickHandler = () => {
		setIsMenuOpen(prev => !prev);
	}

	const handleTabClick = (tabId: string) => {
		setActiveTab(tabId);

		if (isMobile || isTablet) {
			setIsMenuOpen(false);
		}
	};

	return (
		<>
			<button
				type="button"
				className="menu-burger"
				data-test="menu-trigger"
				aria-haspopup="menu"
				onClick={clickHandler}
			>
				<Text color="accent" tag="span">
					Меню
				</Text>
			</button>
			<div ref={elementRef} className={cn('menu', className, {
				'menu--opened': isMenuOpen
			})}>
				<nav className="menu__nav">
					<ul
						className="menu__nav-list"
						ref={navRef}
						onMouseLeave={resetBgPosition}
					>
						{tabs.map((tab) => (
							<li
								key={tab.id}
								onMouseEnter={(e) => setBgPosition(e.currentTarget, tab.id)}
							>
								<a
									href={`#${tab.id}`}
									className={cn('menu__tab', {
										'menu__tab--active': tab.id === activeTab
									})}
									onClick={() => handleTabClick(tab.id)}
									type="button"
								>
									{tab.label}
								</a>
							</li>
						))}
					</ul>
					<span className="menu__lens" style={bgStyle} />
				</nav>
			</div>
		</>
	);
};

export default Menu;
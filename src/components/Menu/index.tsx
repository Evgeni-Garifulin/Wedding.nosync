import React, { useState, useRef } from 'react';

import { useResponsive } from '@hooks';
import cn from 'classnames';
import './menu.scss';

import { Icon } from '@components';

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
				transform: `translate(${offsetLeft - parentPaddingLeft}px, 0) scale(1.24, 1.52)`,
				display: "flex",
			});
		} else {
			setBgStyle({
				width: `auto`,
				height: `${offsetHeight}px`,
				transform: `translate(0, ${offsetTop - parentPaddingTop + 6}px) scale(1.1, 1.16)`,
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
			<div className={cn('menu-burger', {
				'menu-burger--active': isMenuOpen
			})}>
				<button
					type="button"
					className="menu-burger__button liquid-glass"
					data-test="menu-trigger"
					aria-haspopup="menu"
					onClick={clickHandler}
				>
					<Icon name="line-a" color="var(--cl-red)" className="menu-burger__icon-line menu-burger__icon-line--a" />
					<Icon name="line-b" color="var(--cl-red)" className="menu-burger__icon-line menu-burger__icon-line--b" />
				</button>
			</div>
			<div ref={elementRef} className={cn('menu', className, {
				'menu--opened': isMenuOpen
			})}>
				<nav className="menu__nav liquid-glass">
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

					{/* !To-Do create Lens as separate components */}
					<span className="liquid-glass liquid-glass-lens" style={bgStyle} />
				</nav>
			</div>
		</>
	);
};

export default Menu;
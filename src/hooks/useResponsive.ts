import { useState, useEffect } from "react";

const useResponsive = () => {
	const [breakpoints, setBreakpoints] = useState({
		isMobile: false,
		isMobileSm: false,
		isMobileMd: false,
		isMobileLg: false,
		isTablet: false,
		isTabletSm: false,
		isTabletLg: false,
		isDesktop: false,
		isDesktopSm: false,
		isDesktopMd: false,
		isDesktopLg: false,
	});

	useEffect(() => {
		/**
		 * Sets the breakpoints object based on the current window width.
		 * Note: breakpoint values are based on the min-width of the respective media query.
		 */
		const handleResize = () => {
			const width = window.innerWidth;

			setBreakpoints({
				isMobile: width < 640,
				isMobileSm: width < 340,
				isMobileMd: width >= 340 && width < 400,
				isMobileLg: width >= 400 && width < 640,
				isTablet: width >= 640 && width < 1140,
				isTabletSm: width >= 640 && width < 900,
				isTabletLg: width >= 900 && width < 1140,
				isDesktop: width >= 1140,
				isDesktopSm: width >= 1140 && width < 1320,
				isDesktopMd: width >= 1320 && width < 1600,
				isDesktopLg: width >= 1600,
			});
		};

		handleResize();
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return breakpoints;
};

export default useResponsive;

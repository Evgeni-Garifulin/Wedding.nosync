import { Menu } from '@components';
import { type MenuTab } from '@components/Menu';
import { Backgrounds, BackgroundsProps } from './backgrounds';


export interface LayoutLandingProps {
	menuTabs?: MenuTab[];
	background?: BackgroundsProps['background'];
	children: React.ReactNode;
}

export const LayoutLanding: React.FC<LayoutLandingProps> = ({
	children,
	menuTabs,
	background,
}) => {

	return (
		<>
			{menuTabs && <Menu tabs={menuTabs} />}
			<main>
				<Backgrounds background={background} />
				<div className="container">
					{children}
				</div>
			</main>
		</>
	);
};


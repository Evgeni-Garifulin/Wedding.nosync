import '@styles/index.scss';
import './layout.scss';

import cn from 'classnames';
import { Menu } from '@components';
import { type MenuTab } from '@components/Menu';

export interface LayoutProps {
	className?: string;
	children: React.ReactNode;
	menuTabs?: MenuTab[];
}

export const Layout: React.FC<LayoutProps> = ({
	children,
	menuTabs,
	className,
}) => {

	return (
		<>
			{menuTabs && <Menu tabs={menuTabs} />}
			<main id="main" className={cn('main', className)}>
				<div className="container">
					{children}
				</div>
			</main>
		</>
	);
};


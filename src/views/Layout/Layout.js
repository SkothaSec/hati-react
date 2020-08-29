import React from 'react';
import { useMediaQuery } from 'react-responsive';

import { Home } from '../Home';
import { About } from '../About';
import { PageNotFound } from '../Errors';
import LayoutNav from './LayoutNav';

const NavMQ = (props) => {
	const { children, color, label } = props;
	const isTabletOrMobile = useMediaQuery({ query: '(max-width: 568px)' });
	const isPortrait = useMediaQuery({ orientation: 'portrait' });
	if (isTabletOrMobile) {
		return (
			<Navbar fixed bottom color={color} label={label}>
				{children}
			</Navbar>
		);
	} else {
		return (
			<Navbar fixed top color={color} label={label}>
				{children}
			</Navbar>
		);
	}
};

const Layout = (props) => {
	const {} = props;
	const isTabletOrMobile = useMediaQuery({ query: '(max-width: 568px)' });
	const isPortrait = useMediaQuery({ orientation: 'portrait' });
	return (
		<div>
			<LayoutNav />
			<body
				className={`has-navbar-fixed-${
					isTabletOrMobile || isPortrait ? 'bottom' : 'top'
				}`}>
				<br />
				<Home />
				<br />
				<About />
				<br />
				<PageNotFound />
			</body>
		</div>
	);
};

export default Layout;

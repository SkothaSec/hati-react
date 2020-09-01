import React from 'react';
import PropTypes from 'prop-types';
import { useMediaQuery } from 'react-responsive';

import { Navbar, NavbarBrand, NavbarItem, NavbarMenu } from '../../components/Navbar';
import { Links } from '../../routes';

const NavMQ = (props) => {
	const { children, color, label } = props;
	const isMobile = useMediaQuery({ query: '(max-width:850px)' });
	const isPortrait = useMediaQuery({ orientation: 'portrait' });
	if (isMobile || isPortrait) {
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

const LayoutNav = (props) => {
	return (
		<NavMQ color="primary" label="primary navigation">
			<NavbarBrand>
				<NavbarItem
					brand
					src="../../assets/images/logo.svg"
					width="28"
					height="28"
					alt="Hati"
				/>
			</NavbarBrand>
			<NavbarMenu>
				<Links />
			</NavbarMenu>
		</NavMQ>
	);
};

LayoutNav.propTypes = {};

export default LayoutNav;

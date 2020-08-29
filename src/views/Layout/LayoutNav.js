import React from 'react';
import PropTypes from 'prop-types';
import { useMediaQuery } from 'react-responsive';

import { Navbar, NavbarBrand, NavbarItem } from '../../components/Navbar';

const NavMQ = (props) => {
	const { children, color, label } = props;
	const isMobile = useMediaQuery({ query: '(max-width:568px)' });
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
		<NavMQ color="grey" label="primary navigation">
			<NavbarBrand>
				<NavbarItem
					brand
					href="#"
					src="../../assets/images/logo.svg"
					width="28"
					height="28"
					alt="Hati"
				/>
			</NavbarBrand>
			<NavbarItem link href="#">
				Home
			</NavbarItem>
			<NavbarItem link href="#">
				About
			</NavbarItem>
		</NavMQ>
	);
};

LayoutNav.propTypes = {};

export default LayoutNav;

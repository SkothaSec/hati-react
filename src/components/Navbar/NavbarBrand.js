import React from 'react';
import PropTypes from 'prop-types';

/**
 * Navbar brand is the left side of navbar
 * can contain NavbarItem(s) and
 * NavbarBurger - as last child
 * @param {*} props
 */
const NavbarBrand = (props) => {
	const { children } = props;
	return <div className={'navbar-brand'}>{children}</div>;
};

NavbarBrand.propTypes = {
	children: PropTypes.node,
};

export default NavbarBrand;

import React from 'react';
import PropTypes from 'prop-types';

const NavbarMenu = (props) => {
	const { active, children } = props;
	return <div className={`navbar-menu ${active && `is-active`}`}>{children}</div>;
};

NavbarMenu.propTypes = {
	children: PropTypes.node,
	active: PropTypes.bool,
};

export default NavbarMenu;

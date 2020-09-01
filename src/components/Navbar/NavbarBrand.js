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
	return (
		<div className={'navbar-brand'}>
			{children}
			<a
				role="button"
				className="navbar-burger"
				aria-label="menu"
				aria-expanded="false">
				<span aria-hidden="true" />
				<span aria-hidden="true" />
				<span aria-hidden="true" />
			</a>
		</div>
	);
};

NavbarBrand.propTypes = {
	children: PropTypes.node,
};

export default NavbarBrand;

import React from 'react';
import PropTypes from 'prop-types';

export const Navbar = (props) => {
	const { fixed, top, bottom, children, color, label, spaced, ...rest } = props;

	return (
		<nav
			className={`
			navbar ${color && `is-${color}`} 
			${spaced && 'is-spaced'}
			${fixed && `is-fixed-${bottom ? 'bottom' : top ? 'top' : 'top'}`}
			`}
			role="navigation"
			aria-label={label}
			{...rest}>
			{children}
		</nav>
	);
};

Navbar.propTypes = {
	children: PropTypes.node,
	color: PropTypes.oneOf([
		'primary',
		'link',
		'info',
		'success',
		'warning',
		'danger',
		'black',
		'dark',
		'light',
		'white',
		'transparent',
	]),
	label: PropTypes.string,
	spaced: PropTypes.bool,
	fixed: PropTypes.bool,
	top: PropTypes.bool,
	bottom: PropTypes.bool,
};

export default Navbar;

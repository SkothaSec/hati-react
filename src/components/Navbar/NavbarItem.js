import React from 'react';
import PropTypes from 'prop-types';

const boolClass = (cls, bulmaCls) => {
	return cls && bulmaCls;
};

const NavbarItem = (props) => {
	const {
		alt,
		expand,
		hasDropdown,
		tab,
		brand,
		children,
		link,
		src,
		width,
		height,
		href,
		active,
	} = props;

	if (brand || link) {
		return (
			<a
				className={`
                    navbar-item
                    ${tab && `is-tab`} 
                    ${active && `is-active`} 
                    ${expand && `is-expanded`} 
                    ${hasDropdown && `has-dropdown`}`}
				href={href}>
				{brand && <img src={src} width={width} height={height} alt={alt} />}
				{children}
			</a>
		);
	} else {
		return (
			<div
				className={`
                    navbar-item
                    ${tab && `is-tab`} 
                    ${active && `is-active`} 
                    ${expand && `is-expanded`} 
                    ${hasDropdown && `has-dropdown`}`}>
				{children}
			</div>
		);
	}
};

NavbarItem.propTypes = {
	active: PropTypes.bool,
	alt: PropTypes.string,
	expand: PropTypes.bool,
	width: PropTypes.string,
	height: PropTypes.string,
	hasDropdown: PropTypes.bool,
	tab: PropTypes.bool,
	children: PropTypes.node,
	brand: PropTypes.bool,
	href: PropTypes.string,
};

NavbarItem.defaultProps = {
	active: false,
	expand: false,
	hasDropdown: false,
	width: '112',
	height: '28',
	tab: false,
	brand: false,
	href: '#',
	alt: 'Brand Image',
};

export default NavbarItem;

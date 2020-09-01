import React from 'react';
import PropTypes from 'prop-types';

const Level = (props) => {
	const { left, right, item, centerText, mobile } = props;
	return (
		<nav
			className={`
            level${
				left
					? `-left`
					: right
					? `-right`
					: item
					? `-item ${centerText && `has-text-centered`}`
					: ''
			} 
            ${mobile && `is-mobile`}
        `}>
			{children}
		</nav>
	);
};

Level.propTypes = {
	left: PropTypes.bool,
	right: PropTypes.bool,
	item: PropTypes.bool,
	centerText: PropTypes.bool,
	mobile: PropTypes.bool,
};

Level.defaultProps = {
	left: false,
	right: false,
	item: false,
	centerText: false,
	mobile: false,
};

export default Level;

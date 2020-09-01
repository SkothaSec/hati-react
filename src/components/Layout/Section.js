import React from 'react';
import PropTypes from 'prop-types';

const Section = (props) => {
	const { children, size } = props;
	return (
		<section
			className={`
            section ${
				size === 'medium' ? `is-medium` : size === 'large' ? 'is-large' : ''
			}`}>
			{children}
		</section>
	);
};

Section.propTypes = {
	children: PropTypes.node,
	size: PropTypes.oneOf(['medium', 'large']),
};

export default Section;

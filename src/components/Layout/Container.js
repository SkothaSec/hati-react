import React from 'react';
import PropTypes from 'prop-types';

const Container = (props) => {
	const { children, centerText, fluid, wideScreen, fullHD } = props;
	return (
		<div
			className={`
            container
            ${fluid && 'is-fluid'} 
            ${wideScreen && 'is-widescreen'} 
            ${fullHD && is - fullhd} 
            ${centerText && `has-text-centered`}
        `}>
			{children}
		</div>
	);
};

Container.defaultProps = {
	fluid: false,
	wideScreen: false,
	fullHD: false,
	centerText: false,
};

Container.propTypes = {
	children: PropTypes.node,
	centerText: PropTypes.bool,
	fluid: PropTypes.bool,
	wideScreen: PropTypes.bool,
	fullHD: PropTypes.bool,
};

export default Container;

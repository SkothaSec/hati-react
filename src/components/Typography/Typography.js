import React from 'react';
import PropTypes, { string } from 'prop-types';
import cx from 'clsx';
import ReactHtmlParser from 'react-html-parser';

export const Header = (props) => {
	const { type, spaced, color, children } = props;
	let hSize = `is-size-${type.replace('h', '')}`;
	const html = `
		<${type}
            class="${hSize} ${color && `has-text-${color}`} ${spaced ? 'is-spaced' : ''}">
			${children}
		</${type}>
    `;
	return ReactHtmlParser(html);
};

Header.propTypes = {
	type: PropTypes.string,
	spaced: PropTypes.bool,
	color: PropTypes.string,
	children: PropTypes.node,
};

Header.defaultProps = {
	color: 'primary',
	spaced: false,
	type: 'h5',
};

import React from 'react';
import { Link as RouterLinks } from 'react-router-dom';
import PropTypes from 'prop-types';
import NavbarItem from './NavbarItem';

const Link = (props) => {
	const { to, title, styles } = props;
	return (
		<RouterLinks to={to} style={styles}>
			<NavbarItem link>{title}</NavbarItem>
		</RouterLinks>
	);
};

Link.propTypes = {
	to: PropTypes.string.isRequired,
	styles: PropTypes.object,
	title: PropTypes.string.isRequired,
};

Link.defaultProps = {
	styles: { padding: 5 },
};

export default Link;

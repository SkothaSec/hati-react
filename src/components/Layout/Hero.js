import React from 'react';
import Container from './Container';
import PropTypes from 'prop-types';

const HeroBody = (props, ...rest) => {
	const { children } = props;
	return (
		<div className={`hero-body`}>
			<Container {...rest}>{children}</Container>
		</div>
	);
};

const HeroFoot = (props, ...rest) => {
	const { children } = props;
	return (
		<div className={`hero-foot`} {...rest}>
			{children}
		</div>
	);
};

const HeroHead = (props, ...rest) => {
	const { children } = props;
	return (
		<div className={`hero-head`} {...rest}>
			{children}
		</div>
	);
};

const Hero = (props, ...rest) => {
	const { children, body, head, foot, color, size, link } = props;
	return (
		<section
			className={`hero ${color && `is-${color}`} ${size && `is-${size}`} ${
				link && `is-link`
			}`}
			{...rest}>
			{children}
		</section>
	);
};

Hero.propTypes = {
	children: PropTypes.node,
	link: PropTypes.bool,
	color: PropTypes.string,
};

HeroBody.propTypes = {
	children: PropTypes.node,
};

HeroFoot.propTypes = {
	children: PropTypes.node,
};

HeroHead.propTypes = {
	children: PropTypes.node,
};

export { Hero, HeroHead, HeroFoot, HeroBody };

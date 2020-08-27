import react from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
	const {
		children,
		color,
		displays,
		icon,
		iconSize,
		inverted,
		light,
		multi,
		outlined,
		rounded,
		selected,
		merge,
		size,
		sizes,
		state,
	} = props;
	return (
		<button
			className={`
                ${multi ? 'buttons' : 'button'} 
                ${merge && multi && 'has-addons'}
                ${selected && 'is-selected'}
                ${color && `is-${color}`} 
                ${light && 'is-light'}
                ${sizes && `are-${sizes}`}
                ${size && `is-${size}`}
                ${displays && 'is-fullwidth'}
                ${outlined && 'is-outlined'}
                ${inverted && 'is-inverted'}
                ${rounded && 'is-rounded'}
                ${state && `is-${state}`}

            `}
		>
			{icon && (
				<span className={`icon is-${iconSize}`}>
					<i className={`fas fa-${icon}`} />
				</span>
			)}

			{children}
		</button>
	);
};

Button.propTypes = {
	children: PropTypes.node,
	color: PropTypes.oneOf([
		'text',
		'white',
		'light',
		'black',
		'dark',
		'primary',
		'link',
		'info',
		'success',
		'warning',
		'danger',
	]),
	icon: PropTypes.string,
	iconSize: PropTypes.oneOf(['small', 'medium', 'large']),
	light: PropTypes.bool,
	displays: PropTypes.bool,
	outlined: PropTypes.bool,
	inverted: PropTypes.bool,
	rounded: PropTypes.bool,
	selected: PropTypes.bool,
	merge: PropTypes.bool,
	multi: PropTypes.bool,
	size: PropTypes.oneOf(['small', 'normal', 'medium', 'large']),
	sizes: PropTypes.oneOf(['small', 'medium', 'large']),
	state: PropTypes.oneOf([
		'normal',
		'hover',
		'focus',
		'active',
		'loading',
		'static',
		'disabled',
	]),
};

export default Button;

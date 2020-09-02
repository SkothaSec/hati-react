import React from 'react';
import PropTypes from 'prop-types';

const sizing = (sizeNum ) => {
	let size = sizeNum.toString();
	return `is-size-${size}`;
};

const head

const Title = (props) => {
	const { size, children, type, spaced, title, subtitle } = props;
    let titleSize = sizing(size);
    let subtitleSize = sizing( size + 2)

    if (type === 'combined') {
        // NOTE: size is for title size, subtitle size defaults to to sizes lower
		return (
			<>
				<p className={` title ${titleSize} ${spaced && `is-spaced`}`}>
					{title}
                </p>
                <p className={` subtitle ${subtitleSize} ${spaced && `is-spaced`}`}>
                    {subtitle}
                </p>
			</>
		);
	} else {
		return (
			<p className={`${type} ${isSize} ${spaced && `is-spaced`} `}>{children}</p>
		);
	}
};

Title.propTypes = {};

export default Title;

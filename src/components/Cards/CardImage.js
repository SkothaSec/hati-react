import React from 'react';
import PropTypes from 'prop-types';


const CardImage = (props)  => {
    const { ...rest} = props;

    return (
    <div class="card-image" {...rest}>
        {children}
    </div>
    )
}

CardImage.propTypes = {
    ariaHidden: PropTypes.bool,
    ariaLabel: PropTypes.string,
    children: PropTypes.node,
    href: PropTypes.string,
    icon: PropTypes.string,
    title: PropTypes.string,
}

CardImage.defaultProps = {
    ariaLabel: 'Card header icon label',
    href: '#'
}

export default CardImage;
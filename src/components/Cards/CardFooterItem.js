import React from 'react';
import PropTypes from 'prop-types';

const CardFooterItem = (props) => {
    const { children, spanClass, ...rest } = props;
    return (
        <p className={`card-footer-item`} {...rest}>
            <span className={spanClass}>{children}</span>
            {children}
        </p>
    );
};

CardFooterItem.propTypes = {
    spanClass: PropTypes.string,
    children: PropTypes.node
};

export default CardFooterItem;
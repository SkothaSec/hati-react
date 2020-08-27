import React from 'react';
import PropTypes from 'prop-types';

const Card = (props) => {
    const { children, ...rest} = props;
    return (
        <div className={`card`} {...rest}>{children}</div>
    )
}

Card.propTypes = {
    children: PropTypes.node
}


export default Card;
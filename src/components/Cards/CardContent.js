import React from 'react';
import PropTypes from 'prop-types';

const CardContent = (props) => {
    const { children, ...rest } = props;
    return (<div className={`card-content`} {...rest}>{children}</div>)
}


CardContent.propTypes = {
    children: PropTypes.node
}

export default CardContent;
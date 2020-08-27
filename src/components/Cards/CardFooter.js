import React, { Children } from 'react';
import PropTypes from 'prop-types';


const CardFooter = (props) => {
    const { children,...rest } = props;
    return (<footer className={`card-footer`} {...rest}>{children}</footer>)
}

CardFooter.propTypes = {
    children: PropTypes.node
}

export default CardFooter;
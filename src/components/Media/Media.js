import React, { Children } from 'react';
import PropTypes from 'prop-types';

// TODO: Implement media object
// https://bulma.io/documentation/layout/media-object/
const Media = (props) => {
    const { children, ...rest } = props;
    return <div className="media" {...rest}><h1>Media Component</h1> {children}</div>
};

Media.propTypes = {
    children: PropTypes.node
};

export default Media;
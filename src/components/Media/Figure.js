import React from 'react';
import PropTypes from 'prop-types';

const Figure = (props) => {
    const { alt, rounded, sqSize, ratio, fullWidth, src } = props;
    return (
        <figure class={`image ${sqSize && `is-${sqSize.toString()}x${sqSize.toString()}`} ${ratio && `is-${ratio}`}`}>
            <img src={src} alt={alt} className={`${rounded && `is-rounded`} ${fullWidth && 'is-fullwidth'}`} />
        </figure>
    )
}


Figure.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string,
    rounded: PropTypes.bool,
    fullWidth: PropTypes.bool, 
    sqSize: PropTypes.oneOf([16, 24, 32, 48, 64, 96, 128]),
    ratio: PropTypes.oneOf(["square", "1by1", "5by4", "4by3", "3by2", "5by3", "16by9", "2by1", "3by1", "4by5", "3by4", "2by3", "3by5", "9by16", "1by2", "1by3"])
}


Figure.defaultProps = {
    alt: 'Figure',
    rounded: false,
}
export default Figure;
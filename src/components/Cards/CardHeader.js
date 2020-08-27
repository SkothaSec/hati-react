import React from 'react';
import PropTypes from 'prop-types';


const CardHeader = (props)  => {
    const {ariaLabel, ariaHidden, centered, children, href, icon, title, ...rest} = props;

    return (
        <header className={`card-header`} {...rest}>
            { title &&
                <p className={`card-header-title ${centered && 'is-centered'}`}>
                    {title}
                </p>
            }
            {icon &&
                <a href={href} className="card-header-icon" aria-label={ariaLabel}>
                    <span className="icon">
                        <i className={`fas fa-${icon}`} aria-hidden={ariaHidden}/>
                    </span>
                </a>
            }
        </header>
    )
}

CardHeader.propTypes = {
    ariaHidden: PropTypes.bool,
    ariaLabel: PropTypes.string,
    children: PropTypes.node,
    centered: PropTypes.bool,
    href: PropTypes.string,
    icon: PropTypes.string,
    title: PropTypes.string,
}

CardHeader.defaultProps = {
    ariaLabel: 'Card header icon',
    href: '#',
    centered: false
}

export default CardHeader;
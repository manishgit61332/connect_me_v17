import React from 'react';
import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';

export default function SEO({ title, description, type, name }) {
    return (
        <Helmet>
            { /* Standard metadata tags */}
            <title>{title}</title>
            <meta name='description' content={description} />

            { /* End standard metadata tags */}

            { /* Facebook tags */}
            <meta property="og:type" content={type} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />

            { /* End Facebook tags */}

            { /* Twitter tags */}
            <meta name="twitter:creator" content={name} />
            <meta name="twitter:card" content={type} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />

            { /* End Twitter tags */}
        </Helmet>
    );
}

SEO.defaultProps = {
    title: 'ConnectME - Smart IoT Solutions',
    description: 'ConnectME delivers comprehensive utility billing, metering, and industrial IoT solutions across the GCC.',
    type: 'website',
    name: 'ConnectME',
};

SEO.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string,
};

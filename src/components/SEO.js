import React from 'react';
import { Helmet } from 'react-helmet';

function SEO({ description, image, title, author }) {
    return (
        <Helmet
            meta={[
                {
                    name: `description`,
                    content: description
                },
                {
                    property: `og:title`,
                    content: title
                },
                {
                    property: `og:description`,
                    content: description
                },
                {
                    property: `og:type`,
                    content: `website`
                },
                {
                    name: `twitter:creator`,
                    content: author
                },
                {
                    name: `twitter:title`,
                    content: title
                },
                {
                    name: `twitter:description`,
                    content: description
                },
                {
                    property: 'og:image',
                    content: '/images/sharing-default.jpg'
                },
                {
                    name: 'twitter:card',
                    content: 'summary_large_image'
                }
            ]}
        />
    );
}

export default SEO;

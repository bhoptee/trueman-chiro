import React from 'react';
import _ from 'lodash';
import {graphql} from 'gatsby';
import SEO from '../components/SEO';

import components, {Layout} from '../components/index';

// this minimal GraphQL query ensures that when 'gatsby develop' is running,
// any changes to content files are reflected in browser
export const query = graphql`
  query($url: String) {
    sitePage(path: {eq: $url}) {
      id
    }
  }
`;

export default class Landing extends React.Component {
    render() {
        return (
            <Layout {...this.props}>
              <SEO
                    title={_.get(this.props, 'pageContext.frontmatter.title')}
                    description={_.get(this.props, 'pageContext.frontmatter.excerpt')}
                    pathname={this.props.location.pathname}
                />
            {_.map(_.get(this.props, 'pageContext.frontmatter.sections', null), (section, section_idx) => {
                let component = _.upperFirst(_.camelCase(_.get(section, 'type', null)));
                let Component = components[component];
                return (
                  <Component key={section_idx} {...this.props} section={section} site={this.props.pageContext.site} />
                )
            })}
            </Layout>
        );
    }
}

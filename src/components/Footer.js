import React from 'react';
import _ from 'lodash';

import {Link, withPrefix, htmlToReact} from '../utils';
import ActionLink from './ActionLink';

export default class Footer extends React.Component {
    render() {
        return (
            <footer id="colophon" className="site-footer">
              <div className="footer-top outer">
                <div className="inner">
                  <div className="footer-widgets">
                    <div className="widget footer-branding">
                      {_.get(this.props, 'pageContext.site.siteMetadata.footer.logo_img', null) ? (
                      <p className="site-logo">
                        <Link to={withPrefix('/')}><img src={withPrefix(_.get(this.props, 'pageContext.site.siteMetadata.footer.logo_img', null))} alt="Logo" /></Link>
                      </p>
                      ) : 
                      <p className="site-title">
                        <Link to={withPrefix('/')}>{_.get(this.props, 'pageContext.site.siteMetadata.header.title', null)}</Link>
                      </p>
                      }
                      {_.get(this.props, 'pageContext.site.siteMetadata.footer.tagline', null) && (
                      <p className="site-description">
                        {_.get(this.props, 'pageContext.site.siteMetadata.footer.tagline', null)}
                      </p>
                      )}
                    </div>
                    {((_.get(this.props, 'pageContext.site.siteMetadata.footer.has_nav', null) && _.get(this.props, 'pageContext.site.siteMetadata.footer.nav_links', null))) && (
                    <nav className="widget footer-navigation">
                      <div className="footer-nav-inside">
                        {(_.get(this.props, 'pageContext.site.siteMetadata.footer.nav_links', null) && _.get(this.props, 'pageContext.site.siteMetadata.footer.has_nav', null)) && (
                        <div className="secondary-nav">
                          <h2 className="widget-title">{_.get(this.props, 'pageContext.site.siteMetadata.footer.nav_title', null)}</h2>
                          <ul className="secondary-menu">
                            {_.map(_.get(this.props, 'pageContext.site.siteMetadata.footer.nav_links', null), (action, action_idx) => (
                            <li key={action_idx}>
                              <ActionLink {...this.props} action={action} />
                            </li>
                            ))}
                          </ul>
                        </div>
                        )}
                      </div>
                    </nav>
                    )}
                    {_.get(this.props, 'pageContext.site.siteMetadata.footer.has_contact', null) && (
                    <div className="widget footer-contact">
                      <h2 className="widget-title">{_.get(this.props, 'pageContext.site.siteMetadata.footer.contact_title', null)}</h2>
                      <h5 className="widget-subtitle">Email</h5>
                      {_.get(this.props, 'pageContext.site.siteMetadata.footer.contact_email', null) && (
                       <p><Link to="mailto:contact@vantagechiropractic.com">{htmlToReact(_.get(this.props, 'pageContext.site.siteMetadata.footer.contact_email', null))}</Link></p>
                      )}
                       <h5 className="widget-subtitle">Phone</h5>
                       {_.get(this.props, 'pageContext.site.siteMetadata.footer.contact_phone', null) && (
                       <p><Link to="Tel:01844390210">{htmlToReact(_.get(this.props, 'pageContext.site.siteMetadata.footer.contact_phone', null))}</Link></p>
                      )}
                      <h5 className="widget-subtitle">Address</h5>
                      {_.get(this.props, 'pageContext.site.siteMetadata.footer.contact_address', null) && (
                      <p>{htmlToReact(_.get(this.props, 'pageContext.site.siteMetadata.footer.contact_address', null))}</p>
                      )}
                      <p><Link to="https://www.google.com/maps/dir//Vantage+Chiropractic,+Invictus+Gym,+3+Wenman+Rd,+Thame+OX9+3SD/@51.7390425,-0.9671288,19z/data=!4m8!4m7!1m0!1m5!1m1!1s0x4876ed6954ea947b:0x1cbb4aa56e5c2e33!2m2!1d-0.9679445!2d51.7395462"><strong>Get Directions</strong></Link></p>
                      
                    </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="site-info outer">
                <div className="inner">
                <p className="accreditation-logo">
                        <img src={withPrefix(_.get(this.props, 'pageContext.site.siteMetadata.footer.accreditation_img', null))} alt="General Chiropractic Council Registered" />
                      </p>
                  {htmlToReact(_.get(this.props, 'pageContext.site.siteMetadata.footer.content', null))}
                  &nbsp;
                  {_.map(_.get(this.props, 'pageContext.site.siteMetadata.footer.links', null), (action, action_idx) => (
                    <ActionLink key={action_idx} {...this.props} action={action} />
                  ))}
                </div>
              </div>
            </footer>
        );
    }
}

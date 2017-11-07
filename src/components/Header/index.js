import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import Headroom from "react-headroom";

import DropdownMenu from "../DropdownMenu";

import style from "./header.module.scss";

class Header extends React.PureComponent {
  static propTypes = {
    menuItems: PropTypes.array.isRequired
  };

  constructor() {
    super();
    this.state = { mobileMenuOpen: false };
  }

  showMobileNav = () => {
    this.setState({ mobileMenuOpen: true });
  };

  hideMobileNav = () => {
    this.setState({ mobileMenuOpen: false });
  };

  render() {
    const { menuItems } = this.props;

    const headerNavItems = null;

    return (
      <div>
        <Headroom>
          <header className={style.header}>
            <div>
              <Link to="/" className={style.home_link}>
                <h2>
                  <img
                    alt="Supagifts"
                    src="/assets/images/logo_and_tagline.png"
                  />
                </h2>
              </Link>

              <nav className={style.header_navigation}>
                <ul>
                  {menuItems.map(m => (
                    <li key={m.id}>
                      {m.children && m.children.length ? (
                        <DropdownMenu data={m} />
                      ) : (
                        <Link to={m.slug}>{m.title}</Link>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>

              <div
                className={style.mobile_nav__trigger_open}
                onClick={this.showMobileNav.bind(this)}
              >
                Menu
              </div>
            </div>
          </header>{" "}
        </Headroom>

        <div
          className={style.mobile_nav_wrapper}
          style={{
            display: this.state.mobileMenuOpen ? "" : "none"
          }}
          onClick={this.hideMobileNav.bind(this)}
        >
          <nav
            className={style.mobile_navigation}
            onClick={e => {
              e.stopPropagation();
            }}
          >
            <a
              className={style.mobile_nav__trigger_close}
              onClick={this.hideMobileNav.bind(this)}
            >
              Close
            </a>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              {menuItems.map(m => (
                <li key={m.id}>
                  {m.children && m.children.length > 0 ? (
                    <div>
                      <span>{m.title}</span>
                      <ul className={style.mobile_submenu}>
                        {m.children.map(n => (
                          <li key={n.id}>
                            <Link to={n.slug}>{n.title}</Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    <Link to={m.slug}>{m.title}</Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

export default Header;

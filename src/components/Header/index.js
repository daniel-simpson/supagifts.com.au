import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import Headroom from "react-headroom";

import DropdownMenu from "../DropdownMenu";

import "./header.scss";

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
          <header className="header">
            <div>
              <Link
                to="/"
                style={{
                  color: "white",
                  textDecoration: "none",
                  margin: 0
                }}
              >
                <h2
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "0"
                  }}
                >
                  <img
                    alt="Supagifts"
                    src="/assets/images/logo_and_tagline.png"
                    style={{
                      height: "6rem",
                      marginBottom: "0"
                    }}
                  />
                </h2>
              </Link>

              <nav className="header_navigation">
                <ul
                  style={{
                    marginBottom: "0"
                  }}
                >
                  {menuItems.map(m => (
                    <li
                      key={m.id}
                      style={{
                        display: "inline-block",
                        marginRight: "1rem",
                        marginBottom: "0"
                      }}
                    >
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
                className="mobile_nav__trigger_open"
                onClick={this.showMobileNav.bind(this)}
              >
                Menu
              </div>
            </div>
          </header>{" "}
        </Headroom>

        <div
          className="mobile_nav_wrapper"
          style={{
            display: this.state.mobileMenuOpen ? "" : "none"
          }}
          onClick={this.hideMobileNav.bind(this)}
        >
          <nav
            className="mobile_navigation"
            onClick={e => {
              e.stopPropagation();
            }}
          >
            <a
              className="mobile_nav__trigger_close"
              onClick={this.hideMobileNav.bind(this)}
            >
              Close
            </a>
            <ul>
              {menuItems.map(m => (
                <li
                  key={m.id}
                  style={{
                    marginRight: "1rem",
                    marginBottom: "0"
                  }}
                >
                  {m.children && m.children.length > 0 ? (
                    <ul>
                      {m.children.map(n => {
                        <li key={n.id}>
                          <Link
                            to={n.slug}
                            onClick={this.hideMobileNav.bind(this)}
                          >
                            {n.title}
                          </Link>
                        </li>;
                      })}
                    </ul>
                  ) : (
                    <Link to={m.slug} onClick={this.hideMobileNav.bind(this)}>
                      {m.title}
                    </Link>
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

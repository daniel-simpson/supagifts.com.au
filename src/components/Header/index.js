import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";

import DropdownMenu from "../DropdownMenu";

import "./header.scss";

class Header extends React.PureComponent {
  static propTypes = {
    menuItems: PropTypes.array.isRequired
  };

  render() {
    const { menuItems } = this.props;

    return (
      <header
        style={{
          marginBottom: "1rem"
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            position: "relative",

            margin: "0 auto",
            maxWidth: "960px"
          }}
        >
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
                justifyContent: "center"
              }}
            >
              <img
                alt="Supagifts"
                src="/assets/images/logo_and_tagline.png"
                style={{
                  height: "6rem"
                }}
              />
            </h2>
          </Link>

          <nav className="header-navigation">
            <ul>
              {menuItems.map(m => (
                <li
                  key={m.id}
                  style={{
                    display: "inline-block",
                    marginRight: "1rem"
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
        </div>
      </header>
    );
  }
}

export default Header;

import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";

import "./hamburger.scss";

class HamburgerMenu extends React.Component {
  static state = {
    side: "right",
    mobileMenuHidden: true
  };

  static propTypes = {
    outerContainerId: PropTypes.string.isRequired,
    pageWrapId: PropTypes.string.isRequired,
    menuItems: PropTypes.array.isRequired
  };

  render() {
    const { outerContainerId, pageWrapId, menuItems } = this.props;

    const menu = menuItems.map(d => {
      if (d.children && d.children.length) {
        return (
          <li key={d.id}>
            <div>{d.title}</div>{" "}
            <ul>
              {d.children.map(c => {
                return (
                  <li key={c.id} style={{ marginLeft: "1rem" }}>
                    <Link to={c.slug}>{c.title}</Link>
                  </li>
                );
              })}
            </ul>
          </li>
        );
      } else {
        return (
          <li key={d.id}>
            <Link to={d.slug}>{d.title}</Link>
          </li>
        );
      }
    });

    return (
      <div>
        <div>
          <ul>{menu}</ul>
        </div>
      </div>
    );
  }
}

export default HamburgerMenu;

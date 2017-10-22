import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";

import BurgerMenu from "react-burger-menu";

import "./hamburger.scss";

class HamburgerMenu extends React.Component {
  static state = {
    side: "right"
  };

  static propTypes = {
    outerContainerId: PropTypes.string.isRequired,
    pageWrapId: PropTypes.string.isRequired,
    menuItems: PropTypes.array.isRequired
  };

  render() {
    const SlideMenu = BurgerMenu.slide;
    const { outerContainerId, pageWrapId, menuItems } = this.props;

    return (
      <SlideMenu
        outerContainerId={outerContainerId}
        pageWrapId={pageWrapId}
        right
      >
        <div>
          <ul>
            {menuItems.map(d => {
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
            })}
          </ul>
        </div>
      </SlideMenu>
    );
  }
}

export default HamburgerMenu;

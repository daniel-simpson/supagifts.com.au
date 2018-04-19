import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";

import style from "./footer.module.scss";

class Footer extends React.PureComponent {
  static propTypes = {
    menuItems: PropTypes.array.isRequired
  };

  render() {
    const { menuItems } = this.props;

    return (
      <div className={style.footer_wrapper}>
        <footer className={`${style.footer} footer`}>
          <ul>
            {menuItems.map(m => (
              <li key={m.id}>
                {m.slug ? (
                  <Link to={m.slug}>{m.title}</Link>
                ) : (
                  <a href={m.url} target="_blank">
                    {m.title}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </footer>
      </div>
    );
  }
}

export default Footer;

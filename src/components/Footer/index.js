import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";

import "./footer.scss";

class Footer extends React.PureComponent {
  static propTypes = {
    menuItems: PropTypes.array.isRequired
  };

  render() {
    const { menuItems } = this.props;

    return (
      <footer className="footer">
        <ul>
          {menuItems.map(m => (
            <li key={m.id}>
              ( m.slug ? <Link to={m.slug}>{m.title}</Link>
              :<a href={m.url} target="_blank">
                {m.title}
              </a>
              )
            </li>
          ))}
        </ul>
      </footer>
    );
  }
}

export default Footer;

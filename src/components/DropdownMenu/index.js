import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";

import styles from "./dropdown-menu.module.scss";

class DropdownMenu extends React.PureComponent {
  static propTypes = {
    data: PropTypes.object.isRequired
  };

  render() {
    const { id, title, children } = this.props.data;

    return (
      <div className={styles.dropdown_wrapper}>
        <div>{title}</div>
        <ul className={styles.dropdown}>
          {children.map(c => (
            <li key={c.id}>
              <Link to={c.slug}>{c.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default DropdownMenu;

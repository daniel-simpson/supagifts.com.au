import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";

import style from "./blockview.module.scss";

class BlockView extends React.PureComponent {
  static propTypes = {
    items: PropTypes.array.isRequired
  };

  render() {
    const { items } = this.props;

    const blocks = items.map(i => (
      <div
        id={i.id}
        key={i.id}
        className={style.blockview}
        style={{ backgroundColor: i.backgroundColour }}
      >
        <Link to={i.link}>
          <span>{i.title}</span>
        </Link>
      </div>
    ));

    return <div className={style.blockview_wrapper}>{blocks}</div>;
  }
}

export default BlockView;

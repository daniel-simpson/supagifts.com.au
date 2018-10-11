import React from "react";
import Link from "gatsby-link";

import style from "./cta.module.scss";

export default props => {
  if (props.isExternal) {
    return (
      <div className={style.cta_wrapper}>
        <a href={props.url} target="_blank" rel="noopener noreferrer">
          <h5 className={style.cta_button}>{props.text}</h5>
        </a>
      </div>
    );
  } else {
    return (
      <div className={style.cta_wrapper}>
        <Link to={props.url}>
          {" "}
          <h5 className={style.cta_button}>{props.text}</h5>
        </Link>
      </div>
    );
  }
};

import React from "react";
import Link from "gatsby-link";

import style from "./cta.module.scss";

export default props => (
  <div className={style.cta_wrapper}>
    <Link to={props.url}>
      <h5 className={style.cta_button}>{props.text}</h5>
    </Link>
  </div>
);

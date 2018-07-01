import React from "react";
import Link from "gatsby-link";

import style from "./cta.module.scss";

export default props => {
  const link = props.isExternal ? (
    <a href={props.url} target="_blank">
      <h5 className={style.cta_button}>{props.text}</h5>
    </a>
  ) : (
    <Link to={props.url}>
      {" "}
      <h5 className={style.cta_button}>{props.text}</h5>
    </Link>
  );

  return <div className={style.cta_wrapper}>{link}</div>;
};

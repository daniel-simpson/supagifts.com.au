import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import Helmet from "react-helmet";

import style from "./carousel.module.scss";

class Carousel extends React.PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired
  };

  render() {
    const { title, items } = this.props;
    if (items.length == 0) {
      return null;
    }

    return (
      <div className={style.carousel_wrapper}>
        <Helmet>
          <link
            rel="stylesheet"
            type="text/css"
            charset="UTF-8"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
          />
        </Helmet>

        <h3 className={style.carousel_title}>{title}</h3>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            maxWidth: "100%",
            flexWrap: "wrap"
          }}
        >
          {items.map(i => (
            <figure
              key={i.key}
              style={{
                display: "inline-block",
                minWidth: "25%",
                maxWidth: "150px",
                textAlign: "center"
              }}
            >
              <img src={i.img} />
              <figcaption className={style.carousel__item_description}>
                {i.description}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;

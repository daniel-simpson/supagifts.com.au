import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";

import Wysiwyg from "../Wysiwyg";

import style from "./gallery.module.scss";

class Gallery extends React.PureComponent {
  static propTypes = {
    title: PropTypes.string,
    items: PropTypes.array.isRequired,
    itemHeight: PropTypes.string
  };

  render() {
    const { title, items } = this.props;
    if (items.length === 0) {
      return null;
    }

    const columns = this.props.columns ? this.props.columns : 4;
    const itemHeight = this.props.itemHeight ? this.props.itemHeight : "300px";

    return (
      <div className={style.gallery_wrapper}>
        {title ? <h2 className={style.gallery_title}>{title}</h2> : null}
        <div className={style.gallery_items}>
          {items.map(i => {
            const figure = (
              <figure>
                <img
                  className={style.gallery_image}
                  style={{
                    height: itemHeight
                  }}
                  src={i.img}
                  alt={i.alt}
                />
                <figcaption className={style.gallery__item_description}>
                  {i.description && i.description.childMarkdownRemark ? (
                    <Wysiwyg content={i.description} />
                  ) : (
                    i.description
                  )}
                </figcaption>
              </figure>
            );

            if (i.slug) {
              return (
                <Link
                  key={i.key}
                  to={i.slug}
                  className={style.gallery_item}
                  style={{
                    flexBasis: `calc(90% / ${columns})`
                  }}
                >
                  {figure}
                </Link>
              );
            }

            return (
              <div
                key={i.key}
                className={style.gallery_item}
                style={{
                  flexBasis: `calc(90% / ${columns})`
                }}
              >
                {figure}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Gallery;

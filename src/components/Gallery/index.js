import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";

import Wysiwyg from "../Wysiwyg";

import style from "./gallery.module.scss";

class Gallery extends React.PureComponent {
  static propTypes = {
    title: PropTypes.string,
    items: PropTypes.array.isRequired,
    columns: PropTypes.integer,
    itemHeight: PropTypes.string
  };

  render() {
    const { title, items } = this.props;
    if (items.length == 0) {
      return null;
    }

    const columns = this.props.columns ? this.props.columns : 4;
    const itemHeight = this.props.itemHeight ? this.props.itemHeight : "300px";

    return (
      <div className={style.gallery_wrapper}>
        {title ? <h3 className={style.gallery_title}>{title}</h3> : null}
        <div className={style.gallery_items}>
          {items.map(i => (
            <figure
              key={i.key}
              className={style.gallery_item}
              style={{
                maxWidth: `calc(99% / ${columns})`
              }}
            >
              <div
                className={style.image_container}
                style={{
                  maxHeight: itemHeight
                }}
              >
                <img src={i.img} />
              </div>
              <figcaption className={style.gallery__item_description}>
                {i.description && i.description.childMarkdownRemark ? (
                  <Wysiwyg content={i.description} />
                ) : (
                  i.description
                )}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    );
  }
}

export default Gallery;

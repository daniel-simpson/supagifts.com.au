import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";

import Wysiwyg from "../Wysiwyg";

import style from "./content-blocks.module.scss";

class ContentBlock extends React.PureComponent {
  static propTypes = {
    title: PropTypes.string,
    items: PropTypes.array.isRequired,
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
      <div className={style.contentblocks_wrapper}>
        {title ? <h2 className={style.contentblocks_title}>{title}</h2> : null}
        <div className={style.contentblocks_items}>
          {items.map(i => {
            const figure = (
              <div
                key={i.key}
                className={style.contentblocks_item}
                style={{
                  flexBasis: `calc(90% / ${columns})`
                }}
              >
                <img
                  className={style.contentblocks_image}
                  style={{
                    height: itemHeight
                  }}
                  src={i.img}
                />
                <div className={style.contentblocks__item_description}>
                  <h3>{i.title}</h3>
                  {i.description && i.description.childMarkdownRemark ? (
                    <Wysiwyg content={i.description} />
                  ) : (
                    i.description
                  )}
                </div>
              </div>
            );

            if (i.slug) {
              return <Link to={i.slug}>{figure}</Link>;
            }

            return <div>{figure}</div>;
          })}
        </div>
      </div>
    );
  }
}

export default ContentBlock;

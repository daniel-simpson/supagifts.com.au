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
            const image = (
              <img
                className={style.contentblocks_image}
                style={{
                  height: itemHeight
                }}
                src={i.img}
              />
            );

            const description = (
              <div className={style.contentblocks__item_description}>
                <h3>{i.title}</h3>
                {i.description && i.description.childMarkdownRemark ? (
                  <Wysiwyg content={i.description} />
                ) : (
                  i.description
                )}
              </div>
            );

            //TODO: bring this back once we have the datas.
            // if (i.slug) {
            //   return (
            //     <Link
            //       style={{
            //         flexBasis: `calc(90% / ${columns})`
            //       }}
            //       key={i.key}
            //       to={i.slug}
            //     >
            //       <div className={style.contentblocks_item}>
            //         {image}
            //         {description}
            //       </div>
            //     </Link>
            //   );
            // }

            return (
              <div
                className={style.contentblocks_item}
                style={{
                  flexBasis: `calc(90% / ${columns})`
                }}
                key={i.key}
              >
                {image}
                {description}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ContentBlock;

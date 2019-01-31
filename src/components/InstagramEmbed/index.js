import React from "react";
import { StaticQuery, graphql } from "gatsby";

import style from "./instagram.css";

class Instagram extends React.Component {
  constructor(props) {
    super(props);

    const tiles = props.data.allInstaNode.edges.map(x => x.node);

    return (
      <ul className={style.instagram_container}>
        {tiles.map(tile => (
          <li key={tile.id} className={style.instagram_tile}>
            <a
              target="_blank"
              href={`https://instagram.com/p/${tile.id}`}
              rel="noopener noreferrer"
            >
              <img
                alt={tile.caption}
                src={tile.thumbnails[0].src}
                title={`${tile.likes} likes - ${tile.caption}`}
                height={tile.thumbnails[0].config_height}
                width={tile.thumbnails[0].config_width}
              />
            </a>
          </li>
        ))}
      </ul>
    );
  }
}

export default props => (
  <StaticQuery
    query={graphql`
      query instagramQuery {
        allInstaNode {
          edges {
            node {
              id
              likes
              caption
              thumbnails {
                src
                config_width
                config_height
              }
            }
          }
        }
      }
    `}
    render={data => <Instagram data={data} {...props} />}
  />
);

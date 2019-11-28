import React from "react";
import { StaticQuery, graphql } from "gatsby";

import instaStyle from "./instagram.module.scss";

const Instagram = ({ data }) => {
  const tiles = data.allInstaNode.edges.map(x => x.node);

  return (
    <div className={instaStyle.module}>
      <h2 className={instaStyle.title}>Instagram</h2>
      <ul className={instaStyle.container}>
        {tiles.map(tile => {
          const thumbnail = tile.thumbnails[tile.thumbnails.length - 2];
          return (
            <li key={tile.id}>
              <a
                target="_blank"
                href={`https://instagram.com/p/${tile.id}`}
                rel="noopener noreferrer"
              >
                <img src={thumbnail.src} />
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default props => (
  <StaticQuery
    query={graphql`
      query instagramQuery {
        allInstaNode(sort: { fields: [timestamp], order: DESC }) {
          edges {
            node {
              id
              likes
              caption
              timestamp
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
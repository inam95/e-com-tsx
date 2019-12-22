import React from "react";

import { Section } from "../../models/HomePage";

import "./menu-item.styles.scss";
import { withRouter, RouteComponentProps } from "react-router-dom";

interface MenuItemProps extends RouteComponentProps {
  menuItem: Section;
}

const _MenuItem: React.FC<MenuItemProps> = props => {
  const { title, imageUrl, size, linkUrl } = props.menuItem;
  const { match, history } = props;
  return (
    <div
      className={`${size} menu-item`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className="content">
        <h1 className="title">{title.toLocaleUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export const MenuItem = withRouter(_MenuItem);

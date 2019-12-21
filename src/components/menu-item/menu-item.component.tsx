import React from "react";

import { Section } from "../../models/HomePage";

import "./menu-item.styles.scss";

interface MenuItemProps {
  menuItem: Section;
}

export const MenuItem: React.FC<MenuItemProps> = props => {
  const { title, imageUrl, size } = props.menuItem;
  return (
    <div className={`${size} menu-item`}>
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

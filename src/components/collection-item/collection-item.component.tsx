import React from "react";

import "./collection-item.styles.scss";
import { Item } from "../../models/ShopPage";

interface CollectionItemProps {
  item: Item;
}

export const CollectionItem: React.FC<CollectionItemProps> = props => {
  const { item } = props;
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${item.imageUrl})`
        }}
      />
      <div className="collection-footer">
        <span className="name">{item.name}</span>
        <span className="price">{item.price}</span>
      </div>
    </div>
  );
};

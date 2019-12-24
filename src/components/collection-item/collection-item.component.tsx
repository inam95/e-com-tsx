import React from "react";

import { ItemModel } from "../../models/ShopPage";

import "./collection-item.styles.scss";

interface CollectionItemProps {
  item: ItemModel;
}

export const CollectionItem: React.FC<CollectionItemProps> = (
  props: CollectionItemProps
) => {
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

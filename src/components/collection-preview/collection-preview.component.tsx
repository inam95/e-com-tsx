import React from "react";

import { ItemModel } from "../../models/ShopPage";

import { CollectionItem } from "../collection-item/collection-item.component";

import "./collection-preview.styles.scss";

interface CollectionPreviewProps {
  title: string;
  items: ItemModel[];
}

export const CollectionPreview: React.FC<CollectionPreviewProps> = (
  props: CollectionPreviewProps
) => {
  const { title, items } = props;
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toLocaleUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((_, index) => index < 4)
          .map(item => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};

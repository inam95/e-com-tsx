import React from "react";

import "./collection-preview.styles.scss";
import { Collection } from "../../models/ShopPage";
import { CollectionItem } from "../collection-item/collection-item.component";

interface CollectionPreviewProps {
  title: string;
  collectionItems: Collection[];
}

export const CollectionPreview: React.FC<CollectionPreviewProps> = props => {
  const { title, collectionItems } = props;
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toLocaleUpperCase()}</h1>
      <div className="preview">
        {collectionItems
          .filter((collectionItem, index) => index < 4)
          .map((collectionItem, index) => (
            <CollectionItem key={collectionItem.id} item={collectionItem.} />
          ))}
      </div>
    </div>
  );
};

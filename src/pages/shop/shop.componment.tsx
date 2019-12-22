import React from "react";

import { SHOP_DATA } from "./shop.data";
import { Collection } from "../../models/ShopPage";
import { CollectionPreview } from "../../components/collection-preview/collection-preview.component";

interface ShopPageProps {}

interface ShopPageState {
  collections: Collection[];
}

export class ShopPage extends React.Component<ShopPageProps, ShopPageState> {
  constructor(props: ShopPageProps) {
    super(props);
    this.state = {
      collections: SHOP_DATA
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map((collection, index) => (
          <CollectionPreview
            key={collection.id}
            title={collection.title}
            collectionItems={collection.items}
          />
        ))}
      </div>
    );
  }
}

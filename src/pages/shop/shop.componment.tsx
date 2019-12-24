import React from "react";

import { CollectionModel } from "../../models/ShopPage";

import { CollectionPreview } from "../../components/collection-preview/collection-preview.component";

import { SHOP_DATA } from "./shop.data";

interface ShopPageProps {}

interface ShopPageState {
  collections: CollectionModel[];
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
        {collections.map(collection => (
          <CollectionPreview
            key={collection.id}
            title={collection.title}
            items={collection.items}
          />
        ))}
      </div>
    );
  }
}

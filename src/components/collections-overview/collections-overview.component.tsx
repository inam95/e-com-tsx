import React from "react";

import "./collections-overview.style.scss";
import { CollectionPreview } from "../collection-preview/collection-preview.component";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selecCollections } from "../../redux/shop/shop.selector";
import { StoreState } from "../../redux/root-reducer";
import { CollectionModel } from "../../models/ShopPage";

interface CollectionsOverviewStoreProps {
  collections: CollectionModel[];
}

interface CollectionsOverviewProps extends CollectionsOverviewStoreProps {}

const _CollectionsOverview: React.FC<CollectionsOverviewProps> = (
  props: CollectionsOverviewProps
) => {
  const { collections } = props;
  return (
    <div className="collections-overview">
      {collections.map(collection => (
        <CollectionPreview
          key={collection.id}
          title={collection.title}
          items={collection.items}
        />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector<
  StoreState,
  CollectionsOverviewProps
>({
  collections: selecCollections
});

export const CollectionsOverview = connect(mapStateToProps)(
  _CollectionsOverview
);

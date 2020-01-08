import React from "react";

import "./collection.style.scss";
import { RouteComponentProps } from "react-router-dom";
import { connect } from "react-redux";
import { StoreState } from "../../redux/root-reducer";
import { CollectionModel } from "../../models/ShopPage";
import { selectCollection } from "../../redux/shop/shop.selector";
import { CollectionItem } from "../../components/collection-item/collection-item.component";

interface MatchParams {
  collectionId: string;
}

interface CollectionPageStoreProps {
  collection?: CollectionModel;
}

interface CollectionPageProps extends CollectionPageStoreProps {}

const _CollectionPage: React.FC<CollectionPageProps &
  RouteComponentProps<MatchParams>> = (
  props: CollectionPageProps & RouteComponentProps<MatchParams>
) => {
  const { title, items } = props.collection!;

  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (
  state: StoreState,
  ownProps: CollectionPageProps & RouteComponentProps<MatchParams>
) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export const CollectionPage = connect(mapStateToProps)(_CollectionPage);

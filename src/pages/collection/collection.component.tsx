import React from "react";

import "./collection.style.scss";
import { RouteComponentProps } from "react-router-dom";
import { connect } from "react-redux";
import { StoreState } from "../../redux/root-reducer";
import { CollectionModel } from "../../models/ShopPage";
import { selectCollection } from "../../redux/shop/shop.selector";

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
  const { collection } = props;

  console.log(collection);

  return (
    <div className="collection-page">
      <h2>Category</h2>
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

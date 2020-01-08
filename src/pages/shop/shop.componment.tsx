import React from "react";

import { CollectionsOverview } from "../../components/collections-overview/collections-overview.component";
import { RouteComponentProps, Route } from "react-router-dom";
import { CollectionPage } from "../collection/collection.component";

interface ShopPageProps extends RouteComponentProps {}

export const ShopPage: React.FC<ShopPageProps> = (props: ShopPageProps) => {
  const { match } = props;
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  );
};

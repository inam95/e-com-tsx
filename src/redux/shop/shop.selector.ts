import { StoreState } from "../root-reducer";
import { createSelector } from "reselect";

const selectShop = (state: StoreState) => state.shop;

export const selecCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

export const selectCollectionFroPreview = createSelector(
  [selecCollections],
  collections => Object.keys(collections).map(key => (collections as any)[key])
);

export const selectCollection = (collectionUrlParam: string) =>
  createSelector(
    [selecCollections],
    collections => (collections as any)[collectionUrlParam]
  );

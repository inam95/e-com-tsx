import { StoreState } from "../root-reducer";
import { createSelector } from "reselect";

const COLLECTION_ID_MAP = {
  hats: 1,
  sneakers: 2,
  jacket: 3,
  women: 4,
  men: 5
};

const selectShop = (state: StoreState) => state.shop;

export const selecCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

export const selectCollection = (collectionUrlParam: string) =>
  createSelector([selecCollections], collections =>
    collections.find(
      collection =>
        collection.id === (COLLECTION_ID_MAP as any)[collectionUrlParam]
    )
  );

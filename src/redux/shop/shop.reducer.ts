import { SHOP_DATA } from "../../pages/shop/shop.data";
import { CollectionModel } from "../../models/ShopPage";

export interface InitStateShop {
  collections: CollectionModel[];
}

const INITAL_STATE: InitStateShop = {
  collections: SHOP_DATA
};

export const shopreducer = (
  state: InitStateShop = INITAL_STATE,
  action: any
) => {
  switch (action.type) {
    default:
      return state;
  }
};

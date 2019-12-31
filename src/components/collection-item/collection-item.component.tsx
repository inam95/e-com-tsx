import React from "react";

import { ItemModel } from "../../models/ShopPage";

import "./collection-item.styles.scss";
import { CustomButton } from "../cutom-button/custom-button.component";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { addItem } from "../../redux/cart/cart.action";

interface CollectionItemProps {
  item: ItemModel;
  addItem: Function;
}

const _CollectionItem: React.FC<CollectionItemProps> = (
  props: CollectionItemProps
) => {
  const { item, addItem } = props;
  const { name, imageUrl, price } = item;
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
      <CustomButton inverted onClick={() => addItem(item)}>
        Add to cart
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  addItem: (item: ItemModel) => dispatch(addItem(item))
});

export const CollectionItem = connect(
  null,
  mapDispatchToProps
)(_CollectionItem);

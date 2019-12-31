export interface ItemModel {
  name: string;
  id: number;
  imageUrl: string;
  price: number;
  quantity: number;
}

export interface CollectionModel {
  id: number;
  title: string;
  routeName: string;
  items: ItemModel[];
}

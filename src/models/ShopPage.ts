export interface Item {
  name: string;
  id: number;
  imageUrl: string;
  price: number;
}

export interface Collection {
  id: number;
  title: string;
  routeName: string;
  items: Item[];
}

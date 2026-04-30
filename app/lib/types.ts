export type Part = {
  id: number;
  name: string;
  image: string;
  price: string;
  priceValue: number;
  link: string;
  category: string;
};

export type Car = {
  id: string;
  name: string;
  image: string;
};

export type SelectedParts = {
  [key: string]: Part | undefined;
};

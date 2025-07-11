type SinglePrice = {
  price: number;
};

type MultipleSizesPrice = {
  price: {
    small: number;
    large: number;
  };
};

export type MenuItem = {
  name: string;
  ingredients: string[];
} & (SinglePrice | MultipleSizesPrice);

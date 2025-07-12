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

export type NavLink = {
    label: string
    href: string
}

export type NavItem = {
    label: string
} & ({
    isLink: true
    href: string
} | {
    isLink: false
    menu: NavLink[]
})
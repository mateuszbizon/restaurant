import { MenuItem } from "@/types";

export const pizzas: MenuItem[] = [
  {
    name: "Margherita",
    price: {
      small: 28,
      large: 34,
    },
    ingredients: ["Sos pomidorowy", "Mozzarella", "Świeża bazylia", "Oliwa z oliwek"],
  },
  {
    name: "Diavola",
    price: {
      small: 32,
      large: 39,
    },
    ingredients: ["Sos pomidorowy", "Mozzarella", "Pikantne salami", "Papryczki chili", "Cebula"],
  },
];

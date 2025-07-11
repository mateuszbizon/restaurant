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

export const pastas: MenuItem[] = [
  {
    name: "Carbonara",
    price: 34,
    ingredients: ["Makaron tagliatelle", "Pancetta", "Żółtko", "Parmezan", "Pieprz"],
  },
  {
    name: "Pomodoro z burratą",
    price: 33,
    ingredients: ["Spaghetti", "Sos z pomidorów San Marzano", "Czosnek", "Burrata", "Bazylia"],
  },
];

export const desserts: MenuItem[] = [
  {
    name: "Tiramisu",
    price: 21,
    ingredients: ["Mascarpone", "Espresso", "Biszkopty", "Kakao"],
  },
  {
    name: "Brownie z lodami waniliowymi",
    price: 22,
    ingredients: ["Czekolada", "Masło", "Jajka", "Lody waniliowe", "Sos karmelowy"],
  },
];

export const snacks: MenuItem[] = [
  {
    name: "Frytki z batatów",
    price: 15,
    ingredients: ["Batat", "Sól morska", "Sos aioli"],
  },
  {
    name: "Krążki cebulowe",
    price: 17,
    ingredients: ["Cebula", "Ciasto piwne", "Dip pomidorowy"],
  },
];

export const salads: MenuItem[] = [
  {
    name: "Cezar z kurczakiem",
    price: 29,
    ingredients: ["Sałata rzymska", "Grillowany kurczak", "Grzanki", "Parmezan", "Sos Cezar"],
  },
  {
    name: "Grecka",
    price: 27,
    ingredients: ["Pomidory", "Ogórek", "Czerwona cebula", "Oliwki Kalamata", "Ser feta", "Oregano", "Oliwa"],
  },
];
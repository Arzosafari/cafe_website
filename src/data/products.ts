import { img } from "../lib/images";

export type Category =
  | "Hot Coffee"
  | "Iced Coffee"
  | "Signature Drinks"
  | "Tea & Other";

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: Category;
  image: string;
  tags: string[];
  featured?: boolean;
}

export const categories: ("All" | Category)[] = [
  "All",
  "Hot Coffee",
  "Iced Coffee",
  "Signature Drinks",
  "Tea & Other",
];

export const products: Product[] = [
  {
    id: "latte",
    name: "Latte",
    description: "Smooth espresso with steamed milk and a velvety finish.",
    price: 4.5,
    category: "Hot Coffee",
    image: img("1760175445000-0e01e193d1cd", 600),
    tags: ["Hot", "Milk"],
    featured: true,
  },
  {
    id: "americano",
    name: "Americano",
    description: "Rich double espresso topped with hot water.",
    price: 3.5,
    category: "Hot Coffee",
    image: img("1521302080334-4bebac2763a6", 600),
    tags: ["Hot"],
  },
  {
    id: "cappuccino",
    name: "Cappuccino",
    description: "Equal parts espresso, steamed milk, and foamed milk.",
    price: 4.0,
    category: "Hot Coffee",
    image: img("1517701604599-bb29b565090c", 600),
    tags: ["Hot", "Milk"],
    featured: true,
  },
  {
    id: "flat-white",
    name: "Flat White",
    description: "Double ristretto with silky microfoam.",
    price: 4.25,
    category: "Hot Coffee",
    image: img("1572442388796-11668a67e53d", 600),
    tags: ["Hot", "Milk"],
  },
  {
    id: "iced-coffee",
    name: "Iced Coffee",
    description: "Chilled coffee over ice — clean and refreshing.",
    price: 4.0,
    category: "Iced Coffee",
    image: img("1461023058943-07fcbe16d735", 600),
    tags: ["Iced"],
  },
  {
    id: "cold-brew",
    name: "Cold Brew",
    description: "Steeped 18 hours for a smooth, low-acidity cup.",
    price: 4.5,
    category: "Iced Coffee",
    image: img("1759259639356-6eee63241869", 600),
    tags: ["Iced"],
    featured: true,
  },
  {
    id: "caramel-macchiato",
    name: "Caramel Macchiato",
    description: "Vanilla, steamed milk, espresso, and caramel drizzle.",
    price: 4.75,
    category: "Signature Drinks",
    image: img("1592663527359-cf6642f54cff", 600),
    tags: ["Hot", "Sweet"],
  },
  {
    id: "mocha",
    name: "Mocha",
    description: "Espresso, steamed milk, and dark chocolate.",
    price: 4.75,
    category: "Signature Drinks",
    image: img("1559496417-e7f25cb247f3", 600),
    tags: ["Hot", "Sweet"],
  },
  {
    id: "iced-latte",
    name: "Iced Latte",
    description: "Espresso and cold milk poured over ice.",
    price: 4.5,
    category: "Iced Coffee",
    image: img("1770299258214-2f2f44f4c336", 600),
    tags: ["Iced", "Milk"],
  },
  {
    id: "signature-cold-brew",
    name: "Signature Cold Brew",
    description: "Cold brew with a hint of vanilla and cream.",
    price: 5.0,
    category: "Signature Drinks",
    image: img("1781663904565-cfdf6a21a9d9", 600),
    tags: ["Iced", "Sweet"],
  },
  {
    id: "chai-latte",
    name: "Chai Latte",
    description: "Spiced black tea with steamed milk and honey.",
    price: 4.25,
    category: "Tea & Other",
    image: img("1556679343-c7306c1976bc", 600),
    tags: ["Hot", "Sweet"],
  },
  {
    id: "matcha-latte",
    name: "Matcha Latte",
    description: "Stone-ground matcha whisked with steamed milk.",
    price: 4.75,
    category: "Tea & Other",
    image: img("1524350876685-274059332603", 600),
    tags: ["Hot", "Milk"],
  },
];

export const bestsellers = products.filter((p) => p.featured);

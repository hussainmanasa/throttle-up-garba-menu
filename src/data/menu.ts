/**
 * The Garba Night menu. Edit names and prices here; the page and its
 * structured data are built from this file.
 *
 * `diet` drives the green (veg) / red (non-veg) marks used on Indian menus.
 * Prices are in rupees, before taxes.
 */

export type Diet = "veg" | "non-veg";

export type MenuItem = {
  name: string;
  price: number;
  diet: Diet;
  /** Short line under the name, e.g. a choice of flavour. */
  note?: string;
};

export type MenuGroup = {
  /** "Veg" / "Non-Veg" sub-heading; leave out when a section has a single list. */
  title?: string;
  items: MenuItem[];
};

export type MenuSection = {
  id: string;
  title: string;
  /** One-line kicker shown above the section title. */
  kicker: string;
  groups: MenuGroup[];
};

export const menu: MenuSection[] = [
  {
    id: "starters",
    title: "Starters",
    kicker: "From the tandoor & wok",
    groups: [
      {
        title: "Veg",
        items: [
          { name: "Mushroom Tikka Tandoori", price: 329, diet: "veg" },
          { name: "Paneer Pudina Tikka", price: 339, diet: "veg" },
          { name: "Paneer Chilli", price: 419, diet: "veg" },
          { name: "Veg Crispy", price: 419, diet: "veg" },
          { name: "Cheese Corn Tikki", price: 399, diet: "veg" },
        ],
      },
      {
        title: "Non-Veg",
        items: [
          { name: "Chicken Banjara Kabab", price: 449, diet: "non-veg" },
          { name: "Chicken Seekh Kabab", price: 449, diet: "non-veg" },
          { name: "Chicken Koliwada Fry", price: 399, diet: "non-veg" },
          { name: "Thai Pai Chicken", price: 419, diet: "non-veg" },
          { name: "Kung Pao Chicken", price: 549, diet: "non-veg" },
        ],
      },
    ],
  },
  {
    id: "mains",
    title: "Main Course",
    kicker: "Curries & dal",
    groups: [
      {
        title: "Veg",
        items: [
          { name: "Sabzi Hyderabadi", price: 359, diet: "veg" },
          { name: "Sabzi Handi", price: 389, diet: "veg" },
          { name: "Dal Tadka", price: 229, diet: "veg" },
        ],
      },
      {
        title: "Non-Veg",
        items: [
          { name: "Murg Lazeez", price: 449, diet: "non-veg" },
          { name: "Chicken Makhanwala", price: 479, diet: "non-veg" },
        ],
      },
    ],
  },
  {
    id: "breads",
    title: "Breads",
    kicker: "Fresh from the tandoor",
    groups: [
      {
        items: [
          { name: "Tandoori Roti", price: 49, diet: "veg" },
          { name: "Tandoori Naan", price: 59, diet: "veg" },
        ],
      },
    ],
  },
  {
    id: "biryani",
    title: "Biryani",
    kicker: "Slow-cooked dum",
    groups: [
      {
        items: [
          { name: "Veg Dum Biryani", price: 399, diet: "veg" },
          { name: "Chicken Dum Biryani", price: 449, diet: "non-veg" },
        ],
      },
    ],
  },
  {
    id: "rice",
    title: "Rice",
    kicker: "Wok-tossed",
    groups: [
      {
        items: [
          { name: "Veg Fried Rice", price: 319, diet: "veg" },
          { name: "Chicken Burnt Garlic Rice", price: 399, diet: "non-veg" },
        ],
      },
    ],
  },
  {
    id: "munchies",
    title: "Munchies",
    kicker: "Between the rounds",
    groups: [
      {
        items: [
          { name: "French Fries", note: "Salted or Peri Peri", price: 299, diet: "veg" },
          { name: "Nachos", price: 379, diet: "veg" },
          { name: "Masala Peanut", price: 199, diet: "veg" },
        ],
      },
    ],
  },
];

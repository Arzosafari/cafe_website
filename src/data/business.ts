import { img } from "../lib/images";

/** Editable business configuration. Replace with real café details. */
export const business = {
  name: "Brew & Bean",
  tagline: "More Than Just Coffee",
  description:
    "A cozy neighborhood café serving thoughtfully sourced coffee, comforting flavors, and a little moment of calm in every cup.",
  address: "123 Maple Street, Portland, OR 97201",
  phone: "(503) 555-0142",
  email: "hello@brewandbean.cafe",
  hours: [
    { day: "Monday – Friday", time: "7:00 AM – 7:00 PM" },
    { day: "Saturday", time: "8:00 AM – 8:00 PM" },
    { day: "Sunday", time: "8:00 AM – 5:00 PM" },
  ],
  social: {
    instagram: "#",
    facebook: "#",
    twitter: "#",
  },
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2796.3!2d-122.6765!3d45.5231!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDMxJzIzLjIiTiAxMjLCsDQwJzM1LjQiVw!5e0!3m2!1sen!2sus!4v1700000000000",
  directionsUrl: "https://www.google.com/maps/search/?api=1&query=coffee+shop+Portland+OR",
  storyImage: img("1495474472287-4d71bcdd2085", 1000),
  visitImage: img("1556679343-c7306c1976bc", 1000),
  craftImages: {
    sourced: img("1524350876685-274059332603", 400),
    crafted: img("1558122104-355edad709f6", 400),
    moment: img("1533007716222-4b465613a984", 400),
  },
};

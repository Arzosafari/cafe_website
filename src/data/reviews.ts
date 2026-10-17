/** Sample reviews — labeled as sample content. Replace with real reviews. */
export interface Review {
  id: string;
  name: string;
  initials: string;
  rating: number;
  text: string;
  date: string;
  sample?: boolean;
}

export const reviews: Review[] = [
  {
    id: "r1",
    name: "Sarah Mitchell",
    initials: "SM",
    rating: 5,
    text: "The latte here is the best I've had in the city. The atmosphere is so warm and inviting — I come every morning before work.",
    date: "2 weeks ago",
    sample: true,
  },
  {
    id: "r2",
    name: "James Carter",
    initials: "JC",
    rating: 5,
    text: "Their cold brew is incredibly smooth. You can taste the care they put into every cup. Highly recommend the signature drinks.",
    date: "1 month ago",
    sample: true,
  },
  {
    id: "r3",
    name: "Elena Rodriguez",
    initials: "ER",
    rating: 5,
    text: "A cozy place to slow down. The baristas know their craft and the space feels like a second home. The mocha is perfection.",
    date: "1 month ago",
    sample: true,
  },
  {
    id: "r4",
    name: "David Park",
    initials: "DP",
    rating: 4,
    text: "Great coffee and friendly service. The flat white is excellent and the ambiance makes you want to stay for hours.",
    date: "2 months ago",
    sample: true,
  },
];

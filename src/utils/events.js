import people from "./people";

export const EVENTS_LIST = [
  {
    id: 9876,
    description: "Coffee",
    from: people.danyon,
    to: [
      { person: people.emma, amount: 3.6 },
      { person: people.jacob, amount: 3.6 }
    ],
    amount: 7.2,
    timestamp: "2020-02-23T02:33:37+00:00"
  },

  {
    id: 9877,
    description: "Bacon Egg Roll",
    from: people.danyon,
    to: [
      { amount: 6, person: people.emma },
      { amount: 6, person: people.jacob },
      { amount: 6, person: people.erwin }
    ],
    amount: 24.4512,
    timestamp: "2020-02-23T02:33:37+00:00"
  },
  {
    id: 9878,
    description:
      "So many coffees. Why were there so many people! I can't believe there were so many",
    from: people.emma,
    to: [
      { amount: 2.5, person: people.danyon },
      { amount: 2.5, person: people.jacob },
      { amount: 2.5, person: people.erwin },
      { amount: 2.5, person: people.maiya }
    ],
    amount: 13,
    timestamp: "2020-02-23T02:33:37+00:00"
  },
  {
    id: 9879,
    description: "New car",
    from: people.erwin,
    to: [{ amount: 19990, person: people.emma }],
    amount: 19990,
    timestamp: "2020-02-23T02:33:37+00:00"
  },
  {
    id: 9776,
    description: "Coffee",
    from: people.danyon,
    to: [
      { person: people.emma, amount: 3.6 },
      { person: people.jacob, amount: 3.6 }
    ],
    amount: 7.2,
    timestamp: "2020-02-23T02:33:37+00:00"
  },
  {
    id: 9677,
    description: "Bacon Egg Roll",
    from: people.danyon,
    to: [
      { amount: 6.2, person: people.emma },
      { amount: 3.5, person: people.jacob },
      { amount: 8, person: people.erwin }
    ],
    amount: 24.4512,
    timestamp: "2020-02-23T02:33:37+00:00"
  },
  {
    id: 9578,
    description: "Coffee",
    from: people.emma,
    to: [
      { amount: 2.5, person: people.danyon },
      { amount: 2.5, person: people.jacob },
      { amount: 2.5, person: people.erwin },
      { amount: 2.5, person: people.maiya }
    ],
    amount: 12.5,
    timestamp: "2020-02-23T02:33:37+00:00"
  },
  {
    id: 9479,
    description: "Coffee and a muffin",
    from: people.erwin,
    to: [{ amount: 10, person: people.emma }],
    amount: 10,
    timestamp: "2020-02-23T02:33:37+00:00"
  },
  {
    id: 9470,
    description: "Bank transfer",
    from: people.maiya,
    to: [{ amount: 5, person: people.emma }],
    amount: 10,
    timestamp: "2020-02-23T02:33:37+00:00"
  }
];

export default EVENTS_LIST;

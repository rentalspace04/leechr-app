import people from "./people";

export const EVENTS_LIST = [
  {
    id: 9876,
    description: "Coffee",
    from: people.danyon,
    to: [people.emma, people.jacob],
    amount: 3.5
  },

  {
    id: 9877,
    description: "Bacon Egg Roll",
    from: people.danyon,
    to: [people.emma, people.jacob, people.erwin],
    amount: 24.4512
  },
  {
    id: 9878,
    description: "Coffee",
    from: people.emma,
    to: [people.danyon, people.jacob, people.erwin, people.maiya],
    amount: 4
  },
  {
    id: 9879,
    description: "New car",
    from: people.erwin,
    to: [people.emma],
    amount: 19990
  },
  {
    id: 9776,
    description: "Coffee",
    from: people.danyon,
    to: [people.emma, people.jacob],
    amount: 3.5
  },

  {
    id: 9677,
    description: "Bacon Egg Roll",
    from: people.danyon,
    to: [people.emma, people.jacob, people.erwin],
    amount: 24.4512
  },
  {
    id: 9578,
    description: "Coffee",
    from: people.emma,
    to: [people.danyon, people.jacob, people.erwin, people.maiya],
    amount: 4
  },
  {
    id: 9479,
    description: "New car",
    from: people.erwin,
    to: [people.emma],
    amount: 19990
  }
];

export default EVENTS_LIST;

const start = "start";
const end = "end";
const title = "title";
const description = "description";
const coordinates = "coordinates";

module.exports = {
  events: [
    {
      [title]: "The year I was born!",
      [description]: "Birthday",
      [start]: new Date(1996, 6, 29),
      [coordinates]: [1.354526, 103.817552],
    },
    {
      [title]: "Grew up in Brussels, Belgium",
      [description]: "",
      [start]: new Date(1996),
      [end]: new Date(2014),
      [coordinates]: [5, 5],
    },
  ],
};

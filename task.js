const EventEmitter = require("events");

const emitter = new EventEmitter();

const eventCounts = {
  "user-login": 0,
  "user-purchase": 0,
  "profile-update": 0,
  "user-logout": 0
};

emitter.on("user-login", (username) => {
  eventCounts["user-login"]++;
  console.log(`${username} logged in`);
});

emitter.on("user-purchase", (args) => {
  eventCounts["user-purchase"]++;
  console.log(`${args.username} purchased ${args.item}`);
});

emitter.on("profile-update", (args) => {
  eventCounts["profile-update"]++;
  console.log(`${args.username} updated ${args.task}`);
});

emitter.on("user-logout", (username) => {
  eventCounts["user-logout"]++;
  console.log(`${username} logged out successfully`);
});

emitter.on("summary", () => {
  console.log("Event Summary:", eventCounts);
});

/* Emit events */
emitter.emit("user-login", "Prakash Chaudhary");
emitter.emit("user-purchase", {
  username: "Prakash Chaudhary",
  item: "Laptop"
});
emitter.emit("profile-update", {
  username: "Prakash Chaudhary",
  task: "clicked on add to cart"
});
emitter.emit("user-logout", "Prakash Chaudhary");
emitter.emit("summary");

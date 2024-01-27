function logger(thing) {
  return console.log(thing);
}

console.log(logger);

function returnsOne() {
  return 1;
}

logger(returnsOne());

function logger(thing) {
  console.log(typeof thing);
}

logger(returnsOne);
// Logs: "function"

logger(returnsOne());
// Logs: "number"

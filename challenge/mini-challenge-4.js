function one(callback) {
  callback(1);
}

one((x) => console.log(x));

const log = (x) => console.log(x);
one(log);

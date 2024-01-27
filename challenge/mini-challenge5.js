function asyncDouble(num, callback) {
  window.setTimeout(() => callback(num * 2), 1000);
}

asyncDouble(10, (x) => console.log(x));
// (after one second) logs `20`

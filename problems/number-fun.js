function returnsThree() {
  return 3;
}

function reciprocal(n) {
  if (n <= 1000000 && n >= 1){
    return 1/n;
  }
  throw new RangeError("not in range");
}

module.exports = {
  returnsThree,
  reciprocal
};

class PerfectNumber {
  static classify(num) {
    if (num <= 0) {
      throw new Error("Ivalid number!");
    }
    let sum = 0;

    for (let counter = 1; counter < num; counter++) {
      if (num % counter === 0) {
        sum += counter;
      }
    }

    if (sum === num) {
      return "perfect";
    } else if (sum < num) {
      return "deficient";
    } else {
      return "abundant";
    }
  }
}

module.exports = PerfectNumber;

console.log(PerfectNumber.classify(13));

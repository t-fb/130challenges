class PerfectNumber {
  static classify(num) {
    if (this.validNumber(num)) {
      throw new Error("Invalid number!");
    }
    let sum = 0;

    for (let counter = 1; counter < num; counter++) {
      if (num % counter === 0) {
        sum += counter;
      }
    }

    return this.categorize(sum, num);
  }

  static validNumber(num) {
    return num <= 0;
  }
  static categorize(sum, num) {
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

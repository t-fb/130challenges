class Series {
  constructor(str) {
    this.str = str;
  }

  slices(num) {
    this.validateLength(num);
    let numArr = this.strToNumArr();
    let arr = [];

    for (let i = 0; i < numArr.length; i++) {
      let subArr = numArr.slice(i, i + num);
      if (subArr.length === num) {
        arr.push(subArr);
      }
    }

    return arr;
  }
  validateLength(max) {
    if (max > this.str.length) {
      throw new Error("Invalid number!");
    }
  }

  strToNumArr() {
    return [...this.str].map((char) => Number(char));
  }
}

module.exports = Series;

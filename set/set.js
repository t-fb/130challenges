function uniqueElements(array) {
  let result = [];

  array.forEach((element) => {
    if (!result.includes(element)) {
      result.push(element);
    }
  });

  return result;
}

class CustomSet {
  constructor(arr = []) {
    this.arr = uniqueElements(arr);
  }

  isEmpty() {
    return this.arr.length === 0;
  }

  contains(num) {
    return this.arr.includes(num);
  }

  isSubset(otherSet) {
    return this.arr.every((num) => otherSet.arr.includes(num));
  }

  isDisjoint(otherSet) {
    return this.arr.every((num) => !otherSet.arr.includes(num));
  }

  isSame(otherSet) {
    if (this.arr.length !== otherSet.arr.length) return false;
    return this.isSubset(otherSet);
  }

  add(value) {
    if (!this.arr.includes(value)) {
      this.arr.push(value);
    }

    return this;
  }
  intersection(otherSet) {
    let newSet = new CustomSet();

    this.arr.forEach((num) => {
      if (otherSet.contains(num)) {
        newSet.arr.push(num);
      }
    });
    return newSet;
  }

  difference(otherSet) {
    let newSet = new CustomSet();

    this.arr.forEach((num) => {
      if (!otherSet.contains(num)) {
        newSet.arr.push(num);
      }
    });
    return newSet;
  }

  union(otherSet) {
    let newSet = new CustomSet();

    [...this.arr, ...otherSet.arr].forEach((num) => {
      if (!newSet.arr.includes(num)) {
        newSet.arr.push(num);
      }
    });

    return newSet;
  }
}

module.exports = CustomSet;

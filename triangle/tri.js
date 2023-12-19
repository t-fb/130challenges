class Triangle {
  constructor(s1, s2, s3) {
    this.s1 = s1;
    this.s2 = s2;
    this.s3 = s3;

    if (
      [...arguments].some((side) => side <= 0) ||
      s1 + s2 <= s3 ||
      s1 + s3 <= s2 ||
      s2 + s3 <= s1
    ) {
      throw new Error("Invalid sides!");
    }
  }

  kind() {
    if (this.s1 === this.s2 && this.s1 === this.s3) {
      return "equilateral";
    } else if (
      this.s1 === this.s2 ||
      this.s1 === this.s3 ||
      this.s2 === this.s3
    ) {
      return "isosceles";
    } else {
      return "scalene";
    }
  }
}
module.exports = Triangle;

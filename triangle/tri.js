class Triangle {
  constructor(s1, s2, s3) {
    this.s1 = s1;
    this.s2 = s2;
    this.s3 = s3;

    if ([s1, s2, s3].some((side) => side <= 0)) {
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

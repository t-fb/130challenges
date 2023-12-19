const Triangle = require("./tri.js");

describe("triangle class", () => {
  test("equilateral", () => {
    let triangle = new Triangle(2, 2, 2);

    expect(triangle.kind()).toBe("equilateral");
  });
  test("larger equilateral triangles also have equal sides", () => {
    const triangle = new Triangle(10, 10, 10);
    expect(triangle.kind()).toEqual("equilateral");
  });
});

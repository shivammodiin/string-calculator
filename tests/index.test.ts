import { calculateStringSum } from "../src/index";


describe("String Calculator", () => {
  it("returns 0 for an empty string", () => {
    expect(calculateStringSum("")).toEqual(0);
  });

  it('returns 2 when the input is "2"', () => {
    expect(calculateStringSum("2")).toEqual(2);
  });

  it('returns 13 for the input "7,6"', () => {
    expect(calculateStringSum("7,6")).toEqual(13);
  });

  it("supports newline as a delimiter", () => {
    expect(calculateStringSum("9\n2,5")).toEqual(16);
  });

  it("supports custom delimiters specified at the start", () => {
    expect(calculateStringSum("//;\n1;2")).toEqual(3);
  });

  it("handles multiple numbers with a custom delimiter", () => {
    expect(calculateStringSum("//;;\n1;;2;;3")).toEqual(6);
  });

  it("throws an error for a single negative number", () => {
    expect(() => calculateStringSum("-1")).toThrowError("negative numbers not allowed: -1");
  });

  it("throws an error for multiple negative numbers", () => {
    expect(() => calculateStringSum("-1,-10,9")).toThrowError("negative numbers not allowed: -1,-10");
  });
});
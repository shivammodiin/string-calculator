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
});
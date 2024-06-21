import { calculateStringSum } from "../src/index";


describe("String Calculator", () => {
    it("returns 0 for an empty string", () => {
        expect(calculateStringSum("")).toEqual(0);
    });
});
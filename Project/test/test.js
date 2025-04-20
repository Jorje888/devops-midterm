import { expect } from "chai";
import IsMyCountPrime from "../src/logic.js";

describe("IsMyCountPrime", () => {
  it("should be a function", () => {
    expect(IsMyCountPrime).to.be.a("function");
  });
  it("should return true for prime numbers", () => {
    expect(IsMyCountPrime(3)).to.be.true;
  });
  it("should return false for non-prime numbers", () => {
    expect(IsMyCountPrime(4)).to.be.false;
  });
  it("should return false for negative numbers", () => {
    expect(IsMyCountPrime(-1)).to.be.false;
  });
  it("should return false for zero", () => {
    expect(IsMyCountPrime(0)).to.be.false;
  });
  it("should return false for one", () => {
    expect(IsMyCountPrime(1)).to.be.false;
  });
  it("should return true for two", () => {
    expect(IsMyCountPrime(2)).to.be.true;
  });
});

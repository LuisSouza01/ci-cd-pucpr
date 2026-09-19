import { describe, it, expect } from "vitest";
import { sum, isPalindrome, isPrime } from "./index";

describe("sum", () => {
  it("adds two positive numbers", () => {
    expect(sum(2, 3)).toBe(5);
  });

  it("handles negative numbers", () => {
    expect(sum(-2, 5)).toBe(3);
  });
});

describe("isPalindrome", () => {
  it("returns true for a palindrome", () => {
    expect(isPalindrome("arara")).toBe(true);
  });

  it("returns false for a non-palindrome", () => {
    expect(isPalindrome("devops")).toBe(false);
  });
});

describe("isPrime", () => {
  it("returns true for a prime number", () => {
    expect(isPrime(7)).toBe(true);
  });

  it("returns false for a non-prime number", () => {
    expect(isPrime(8)).toBe(false);
  });

  it("returns false for 0 and 1", () => {
    expect(isPrime(0)).toBe(false);
    expect(isPrime(1)).toBe(false);
  });

  it("returns false for negative numbers", () => {
    expect(isPrime(-7)).toBe(false);
  });
});
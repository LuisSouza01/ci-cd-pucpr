import { describe, it, expect } from "vitest";
import { sum, isPalindrome } from "./index";

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
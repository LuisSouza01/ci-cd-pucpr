export function sum(a: number, b: number): number {
  return a + b;
}

export function isPalindrome(text: string): boolean {
  const normalized = text.toLowerCase().replace(/[^a-z0-9]/g, "");

  return normalized === normalized.split("").reverse().join("");
}

export function isPrime(n: number): boolean {
  if (!Number.isInteger(n) || n < 2) {
    return false;
  }

  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}
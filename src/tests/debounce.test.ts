import { debounce } from "@/helper/function.helper";
import { afterEach, beforeEach, describe, expect, it, vitest } from "vitest";

beforeEach(() => {
  vitest.useFakeTimers();
});
afterEach(() => {
  vitest.useRealTimers();
});

describe("Debounce function", () => {
  it("Should call function after delay", () => {
    const fn = vitest.fn();
    const debouncedFn = debounce(fn, 300);

    debouncedFn("hello");

    // belum dipanggil
    expect(fn).not.toBeCalled();

    // majuin waktu
    vitest.advanceTimersByTime(300);

    expect(fn).toBeCalledTimes(1);
    expect(fn).toBeCalledWith("hello");
  });

  it("Should call only last function", () => {
    const fn = vitest.fn();
    const debouncedFn = debounce(fn, 300);

    debouncedFn("first");
    debouncedFn("second");
    debouncedFn("third");

    vitest.advanceTimersByTime(300);

    expect(fn).toBeCalledTimes(1);
    expect(fn).toBeCalledWith("third");
  });
});

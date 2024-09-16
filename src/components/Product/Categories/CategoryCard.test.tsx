import { describe, test, expect, beforeEach, afterEach } from "vitest";
import { fireEvent, render, screen, cleanup } from "@testing-library/react";
import CategoryCard from "./CategoryCard";

describe("category card component", () => {
  beforeEach(() => {
    render(<CategoryCard id={0} image="category image" name="category name" />);
  });

  afterEach(() => {
    cleanup();
  });

  test("true is true", () => {
    expect(true).toBeTruthy();
  });

  test("category card is rederer", () => {
    expect(screen.getByText(/category name/i)).toBeDefined();
    screen.debug();
  });
});

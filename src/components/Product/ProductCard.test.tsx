import { describe, test, expect, beforeEach, afterEach } from "vitest";
import { fireEvent, render, screen, cleanup } from "@testing-library/react";
import ProductCard from "./ProductCard";

describe("Product Card component", () => {
  beforeEach(() => {
    render(
      <ProductCard
        id={0}
        title="product title"
        price={9999}
        description="a product description"
        images={["image-1", "image-2"]}
        category={{
          id: 0,
          name: "category name",
          image: "category image",
          creationAt: "00-00-0000",
          updatedAt: "00-00-0000",
        }}
      />
    );
  });

  afterEach(() => {
    cleanup();
  });

  test("true is true", () => {
    expect(true).toBeTruthy();
  });

  test("component is renderer", () => {
    let component = screen.findByText("product title");

    expect(component).toBeDefined();
  });

  test("show quantity when click add to cart", () => {
    fireEvent.click(screen.getByText(/add to cart/i));
    expect(screen.getByText(/1/)).toBeDefined();
  });

  test("quantity increse when add to cart button is clicked", () => {
    // screen.debug();
    let quantity = screen.getByText(/1/);
    expect(quantity.innerText).toMatch("1");
    let addButton = screen.getByLabelText("add to cart");
    fireEvent.click(addButton);
    expect(quantity.innerText).toMatch("2");
    fireEvent.click(addButton);
    expect(quantity.innerText).toMatch("3");
    fireEvent.click(addButton);
    expect(quantity.innerText).toMatch("4");
  });

  test("quantity decreses when remove from cart is clicked", () => {
    let quantity = screen.getByText(/4/);

    let removeButton = screen.getByLabelText("remove from cart");

    expect(quantity.innerText).toMatch("4");

    fireEvent.click(removeButton);
    expect(quantity.innerText).toMatch("3");
    fireEvent.click(removeButton);
    expect(quantity.innerText).toMatch("2");
    fireEvent.click(removeButton);
    expect(quantity.innerText).toMatch("1");
    fireEvent.click(removeButton);

    expect(screen.getByText(/add to cart/i));
  });
});

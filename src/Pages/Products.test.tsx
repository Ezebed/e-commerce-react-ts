import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import {
  afterAll,
  afterEach,
  beforeAll,
  beforeEach,
  describe,
  expect,
  test,
} from "vitest";
import { setupServer } from "msw/node";
import { HttpResponse, http } from "msw";
import { mockCategories, mockProducts } from "@/Mock/Products/ProductsMocks";
import {
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
  within,
} from "@testing-library/react";
import Products from "./Products";
import { apiBaseUrl } from "@/utils/constants.d";
import { MemoryRouter } from "react-router-dom";

const queryClient = new QueryClient();

const restHandler = [
  http.get(`${apiBaseUrl}products/`, ({ request }) => {
    let url = new URL(request.url);

    let categoryId = url.searchParams.get("categoryId");

    if (categoryId && categoryId === "1")
      return HttpResponse.json(mockProducts[0]);

    if (categoryId && categoryId === "2")
      return HttpResponse.json(mockProducts[1]);

    if (categoryId && categoryId === "3") return HttpResponse.json([]);

    return HttpResponse.json(mockProducts);
  }),
  http.get(`${apiBaseUrl}categories`, () => {
    return HttpResponse.json(mockCategories);
  }),
];

const server = setupServer(...restHandler);

describe("Products Page", () => {
  beforeAll(() => {
    server.listen({ onUnhandledRequest: "error" });
  });

  beforeEach(() => {
    render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter>
          <Products />
        </MemoryRouter>
      </QueryClientProvider>
    );
  });

  afterEach(() => {
    cleanup();
    server.resetHandlers();
  });

  afterAll(() => {
    server.close();
  });

  test("true is true", () => {
    expect(true).toBeTruthy();
  });

  test("page show products", async () => {
    await waitFor(() => {
      expect(screen.getByText(/Smartphone/i)).toBeDefined();
      expect(screen.getByText(/learning TypeScript/i)).toBeDefined();
    });
  });

  test("page show categories", async () => {
    let asideElement = screen.getByRole("complementary");
    await waitFor(() => {
      expect(within(asideElement).getByText(/electronics/i)).toBeDefined();
      expect(within(asideElement).getByText(/books/i)).toBeDefined();
    });
  });

  test("page filter products by categories", async () => {
    let asideElement = screen.getByRole("complementary");

    // both products are in page
    expect(await screen.findByText(/learning typescript/i)).toBeDefined();
    expect(await screen.findByText(/smartphone/i)).toBeDefined();

    //click to electronic category
    fireEvent.click(await within(asideElement).findByText(/electronics/i));

    expect(await screen.findByText(/smartphone/i)).toBeDefined();

    // click to books category
    fireEvent.click(await within(asideElement).findByText(/books/i));

    expect(await screen.findByText(/learning typescript/i)).toBeDefined();

    // deactivate filter by categories
    fireEvent.click(await within(asideElement).findByText(/books/i));

    expect(await screen.findByText(/learning typescript/i)).toBeDefined();
    expect(await screen.findByText(/smartphone/i)).toBeDefined();
  });

  test("page show text when no products to show", async () => {
    fireEvent.click(await screen.findByText(/empty category/i));

    expect(await screen.findByText(/No Produtcs To Show/i)).toBeDefined();
  });
});

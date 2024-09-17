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
  http.get(`${apiBaseUrl}products/`, () => {
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
});

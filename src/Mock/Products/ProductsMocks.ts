// src/__mocks__/mockProducts.ts

import { Categories, Products } from "@/utils/types/ProductTypes.d";

const mockCategories: Categories = [
  {
    id: 1,
    name: "Electronics",
    image: "https://example.com/electronics.jpg",
    creationAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-02T00:00:00Z",
  },
  {
    id: 2,
    name: "Books",
    image: "https://example.com/books.jpg",
    creationAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-02T00:00:00Z",
  },
];

const mockProducts: Products = [
  {
    id: 1,
    title: "Smartphone XYZ",
    price: 699.99,
    description: "Latest model with advanced features.",
    images: ["https://example.com/smartphone.jpg"],
    creationAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-02T00:00:00Z",
    category: mockCategories[0],
  },
  {
    id: 2,
    title: "Learning TypeScript",
    price: 29.99,
    description: "A comprehensive guide to TypeScript.",
    images: ["https://example.com/typescript-book.jpg"],
    creationAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-02T00:00:00Z",
    category: mockCategories[1],
  },
];

export { mockProducts, mockCategories };

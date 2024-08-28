import { create } from "zustand";

interface ProductsParams {
  productTitle: string;
  categoryID: number;
  changeProductTitle: (newProductTitle: string) => void;
  changeCategoryID: (newCategoryID: number) => void;
}

export const useProductsParams = create<ProductsParams>((set) => ({
  productTitle: "",
  categoryID: 0,
  changeProductTitle: (newProductTitle: string) =>
    set({ productTitle: newProductTitle }),
  changeCategoryID: (newCategoryID: number) =>
    set((state) => ({
      categoryID: newCategoryID === state.categoryID ? 0 : newCategoryID,
    })),
}));

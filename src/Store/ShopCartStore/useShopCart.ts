import { CartItem, Item, ShopCart } from "@/utils/types/ShopCartTypes.d";
import { create } from "zustand";

export const useShopCart = create<ShopCart>((set) => ({
  cartItems: [],
  addCartItem: (newItem: Item) =>
    set((state) => {
      const itemCartIndex = state.cartItems.findIndex(
        (item) => item.id === newItem.id
      );

      if (itemCartIndex >= 0) {
        const newCartItems = structuredClone(state.cartItems);
        newCartItems[itemCartIndex].quantity += 1;
        return { cartItems: newCartItems };
      }

      return { cartItems: [...state.cartItems, { ...newItem, quantity: 1 }] };
    }),
  removeCartItem: (itemId: number) =>
    set((state) => {
      const itemCartIndex = state.cartItems.findIndex(
        (item) => item.id === itemId
      );

      if (itemCartIndex >= 0 && state.cartItems[itemCartIndex].quantity > 1) {
        const newCartItems = structuredClone(state.cartItems);
        newCartItems[itemCartIndex].quantity -= 1;
        return { cartItems: newCartItems };
      }

      return {
        cartItems: state.cartItems.filter(
          (item: CartItem) => item.id !== itemId
        ),
      };
    }),
  daleteCartItem: (itemId: number) =>
    set((state) => ({
      cartItems: state.cartItems.filter((item: CartItem) => item.id !== itemId),
    })),
  cleanCart: () => set({ cartItems: [] }),
}));

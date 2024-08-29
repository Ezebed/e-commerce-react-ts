export interface Item {
  id: number;
  name: string;
  price: number;
}

export interface CartItem extends Item {
  quantity: number;
}

export interface ShopCart {
  cartItems: CartItem[];
  addCartItem: (newItem: Item) => void;
  removeCartItem: (itemId: number) => void;
  daleteCartItem: (itemId: number) => void;
  cleanCart: () => void;
}

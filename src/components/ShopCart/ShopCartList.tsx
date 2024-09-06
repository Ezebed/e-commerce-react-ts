import { CartItem } from "@/utils/types/ShopCartTypes.d";
import { VStack, StackDivider } from "@chakra-ui/react";
import ShopCartCard from "./ShopCartCard";

interface ShopCartListProps {
  cartItems: CartItem[];
  removeCartItem: (ItemID: number) => void;
}

export default function ShopCartList({
  cartItems,
  removeCartItem,
}: ShopCartListProps): JSX.Element {
  return (
    <VStack align="left" divider={<StackDivider bg="gray.200" />}>
      {cartItems.map((item) => (
        <ShopCartCard
          key={item.id}
          id={item.id}
          name={item.name}
          price={item.price}
          quantity={item.quantity}
          removeCartItem={removeCartItem}
        />
      ))}
    </VStack>
  );
}

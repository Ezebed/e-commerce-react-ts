import { useShopCart } from "@/Store/ShopCartStore/useShopCart";
import { Item } from "@/utils/types/ShopCartTypes.d";
import { Button, Flex, IconButton } from "@chakra-ui/react";
import { MdiCartPlus } from "@/Icons/MdiCartPlus";
import { MdiCartMinus } from "@/Icons/MdiCartMinus";

export default function ShopCartButtons({
  id,
  name,
  price,
}: Item): JSX.Element {
  const cartItems = useShopCart((state) => state.cartItems);
  const addCartItem = useShopCart((state) => state.addCartItem);
  const removeCartItem = useShopCart((state) => state.removeCartItem);

  const cartItemIndex = cartItems.findIndex((item) => item.id === id);

  const isInCart = cartItemIndex >= 0;

  return (
    <Flex gap="8px" justifyContent="center">
      {isInCart && cartItems[cartItemIndex] && (
        <>
          <IconButton
            aria-label="remove from cart"
            size="md"
            width="60px"
            colorScheme="red"
            onClick={() => removeCartItem(id)}
            icon={<MdiCartMinus />}
          />
          <Flex
            bgColor="white"
            borderRadius="10px"
            height="40px"
            width="40px"
            justifyContent="center"
            alignItems="center"
            color="black"
            fontSize="1.5rem"
            fontWeight="bold"
          >
            {cartItems[cartItemIndex].quantity}
          </Flex>
          <IconButton
            aria-label="add to cart"
            size="md"
            width="60px"
            colorScheme="green"
            onClick={() => addCartItem({ id: id, name: name, price: price })}
            icon={<MdiCartPlus />}
          />
        </>
      )}
      {!isInCart && (
        <Button
          colorScheme="green"
          width="100%"
          onClick={() => addCartItem({ id: id, name: name, price: price })}
        >
          Add to Cart
        </Button>
      )}
    </Flex>
  );
}

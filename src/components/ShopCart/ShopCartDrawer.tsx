import { F7MoneyDollar } from "@/Icons/F7MoneyDollar";
import { MdiCart } from "@/Icons/MdiCart";
import { useShopCart } from "@/Store/ShopCartStore/useShopCart";
import {
  IconButton,
  Icon,
  Drawer,
  DrawerContent,
  DrawerFooter,
  Button,
  DrawerBody,
  DrawerHeader,
  DrawerCloseButton,
  DrawerOverlay,
  useDisclosure,
  Tag,
  Text,
  HStack,
} from "@chakra-ui/react";
import { useRef } from "react";
import ShopCartTable from "./ShopCartTable";

export default function ShopCartDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef<HTMLButtonElement>(null);

  const cartItems = useShopCart((state) => state.cartItems);
  const removeCartItem = useShopCart((state) => state.removeCartItem);
  const cleanCart = useShopCart((state) => state.cleanCart);

  return (
    <>
      <div className="position-relative">
        <IconButton
          isRound={true}
          variant="solid"
          bg="dark.200"
          aria-label="Done"
          fontSize="20px"
          ref={btnRef}
          onClick={onOpen}
          icon={<Icon as={MdiCart} />}
        />
        {cartItems.length > 0 && (
          <Tag
            position="absolute"
            bottom="-4px"
            right="-4px"
            size="sm"
            colorScheme="green"
            borderRadius="50px"
          >
            {cartItems.length}
          </Tag>
        )}
      </div>

      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        size="md"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader
            bg="dark.100"
            display="flex"
            alignItems="center"
            gap="8px"
          >
            Shop Cart <Icon boxSize="20px" as={MdiCart} />
          </DrawerHeader>

          <DrawerBody bg="dark.200">
            {cartItems.length > 0 && (
              <ShopCartTable
                cartItems={cartItems}
                removeCartItem={removeCartItem}
              />
            )}

            {cartItems.length === 0 && <Text>Shop Cart Is Empty</Text>}
          </DrawerBody>

          <DrawerFooter bg="dark.100" gap="8px">
            <HStack width="100%">
              <Text fontSize="3xl" as="b">
                Total ={" "}
                {cartItems.reduce(
                  (acc, item) => acc + item.price * item.quantity,
                  0
                )}
              </Text>
              <Icon as={F7MoneyDollar} boxSize={8} />
            </HStack>
            <Button
              mr={3}
              colorScheme="red"
              onClick={cleanCart}
              disabled={cartItems.length === 0}
            >
              Clean Cart
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

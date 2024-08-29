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
} from "@chakra-ui/react";
import { useRef } from "react";

export default function ShopCartDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef<HTMLButtonElement>(null);

  const cartItems = useShopCart((state) => state.cartItems);
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
            Shop Cart <Icon boxSize="20px" as={MdiCart} />{" "}
          </DrawerHeader>

          <DrawerBody bg="dark.200">
            {cartItems.length >= 0 && (
              <Text>
                {cartItems.map((item) => (
                  <Text lineHeight="1lh">
                    {item.name} X{item.quantity}
                  </Text>
                ))}
              </Text>
            )}
            {cartItems.length === 0 && <Text>Shop Cart Empty</Text>}
          </DrawerBody>

          <DrawerFooter bg="dark.100">
            <Button mr={3} colorScheme="red" onClick={cleanCart}>
              Clean Cart
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

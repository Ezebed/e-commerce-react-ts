import { MdiCart } from "@/Icons/MdiCart";
import {
  IconButton,
  Icon,
  Drawer,
  DrawerContent,
  DrawerFooter,
  Button,
  DrawerBody,
  Input,
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
        <Tag
          position="absolute"
          bottom="-4px"
          right="-4px"
          size="sm"
          colorScheme="green"
          borderRadius="50px"
        >
          5
        </Tag>
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
            <Input placeholder="Type here..." />
          </DrawerBody>

          <DrawerFooter bg="dark.100">
            <Button
              variant="outline"
              mr={3}
              colorScheme="red"
              onClick={onClose}
            >
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

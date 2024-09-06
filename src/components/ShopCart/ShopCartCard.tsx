import { CartItem } from "@/utils/types/ShopCartTypes.d";
import { DeleteIcon } from "@chakra-ui/icons";
import {
  Card,
  CardBody,
  CardHeader,
  Center,
  Heading,
  Text,
  IconButton,
} from "@chakra-ui/react";

interface ShopCartCardProps extends CartItem {
  removeCartItem: (ItemID: number) => void;
}

export default function ShopCartCard({
  id,
  name,
  price,
  quantity,
  removeCartItem,
}: ShopCartCardProps): JSX.Element {
  return (
    <Card variant="unstyled" bg="transparent">
      <CardHeader>
        <Center>
          <Heading as="h3" fontSize="16">
            {name}
          </Heading>
        </Center>
      </CardHeader>
      <CardBody display="flex" justifyContent="space-between" gap="8px">
        <Text>Price: {price}$</Text>
        <Text>Quantity: {quantity}</Text>
        <Text>Total: {price * quantity}$</Text>

        <IconButton
          size={{ base: "md", md: "sm" }}
          colorScheme="red"
          aria-label="delete from cart"
          icon={<DeleteIcon />}
          onClick={() => removeCartItem(id)}
        />
      </CardBody>
    </Card>
  );
}

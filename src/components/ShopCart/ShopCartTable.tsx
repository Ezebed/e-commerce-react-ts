import { CartItem } from "@/utils/types/ShopCartTypes.d";
import { DeleteIcon } from "@chakra-ui/icons";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  IconButton,
} from "@chakra-ui/react";

interface ShopCartTableProps {
  cartItems: CartItem[];
  removeCartItem: (ItemID: number) => void;
}

export default function ShopCartTable({
  cartItems,
  removeCartItem,
}: ShopCartTableProps): JSX.Element {
  return (
    <TableContainer>
      <Table size="sm">
        <Thead>
          <Tr>
            <Th color="white">Product Name</Th>
            <Th color="white">Quantity</Th>
            <Th color="white">Total Price ($)</Th>
            <Th></Th>
          </Tr>
        </Thead>
        <Tbody>
          {cartItems.map((item) => (
            <Tr key={item.id}>
              <Td maxWidth="170px" textOverflow="ellipsis" overflow="hidden">
                {item.name}
              </Td>
              <Td isNumeric>{item.quantity}</Td>
              <Td isNumeric>{item.price * item.quantity}</Td>
              <Th>
                <IconButton
                  size="sm"
                  colorScheme="red"
                  aria-label="delete from cart"
                  icon={<DeleteIcon color="teal" />}
                  onClick={() => removeCartItem(item.id)}
                />
              </Th>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}

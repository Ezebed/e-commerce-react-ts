import { useProductsParams } from "@/Store/ProductsParamsStore/useProductsParams";
import { SearchIcon } from "@chakra-ui/icons";
import {
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import { ChangeEvent, useEffect, useRef, useState } from "react";

export default function SearchInput(): JSX.Element {
  const [productTitle, setProductTitle] = useState<string>("");
  const changeProductTitle = useProductsParams(
    (state) => state.changeProductTitle
  );
  const inputRef = useRef<HTMLInputElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const searchTitle = (e: KeyboardEvent) => {
      if (e.key === "Enter") btnRef.current?.click();
    };

    if (inputRef.current) {
      inputRef.current.addEventListener("keypress", searchTitle);
    }

    return () => {
      if (inputRef.current) {
        inputRef.current.removeEventListener("keypress", searchTitle);
      }
    };
  }, []);

  const inputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setProductTitle(e.target.value);
  };

  const HandleClick = () => {
    changeProductTitle(productTitle);
  };
  return (
    <InputGroup>
      <InputLeftElement>
        <SearchIcon color="text.200" />
      </InputLeftElement>
      <Input
        ref={inputRef}
        bgColor="dark.200"
        value={productTitle}
        color="text.100"
        variant="filled"
        placeholder="Iphone, Adidas, Laptops..."
        _placeholder={{ color: "text.100" }}
        onChange={inputChange}
      />
      <InputRightElement width="4.5rem">
        <Button
          ref={btnRef}
          size="sm"
          height="1.75rem"
          bg="dark.200"
          color="text.100"
          _hover={{ bg: "green.500" }}
          onClick={HandleClick}
        >
          Search
        </Button>
      </InputRightElement>
    </InputGroup>
  );
}

import { Link } from "react-router-dom";
import {
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Button,
  Avatar,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { useState, ChangeEvent } from "react";
import ShopCartDrawer from "./ShopCart/ShopCartDrawer";
import { useProductsParams } from "@/Store/ProductsParamsStore/useProductsParams";

export default function Header(): JSX.Element {
  const [productTitle, setProductTitle] = useState<string>("");
  const changeProductTitle = useProductsParams(
    (state) => state.changeProductTitle
  );

  const inputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setProductTitle(e.target.value);
  };

  const HandleClick = () => {
    changeProductTitle(productTitle);
  };

  return (
    <header className="appHeader">
      <div className="headerLeft">
        <Link to="/" className="siteLogo ">
          EzeStore
        </Link>
      </div>
      <div className="headerCenter">
        <InputGroup>
          <InputLeftElement>
            <SearchIcon color="text.200" />
          </InputLeftElement>
          <Input
            bgColor="dark.200"
            value={productTitle}
            color="text.100"
            variant="filled"
            placeholder="Search"
            _placeholder={{ color: "text.100" }}
            onChange={inputChange}
          />
          <InputRightElement width="4.5rem">
            <Button
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
      </div>
      <div className="headerRight">
        <ShopCartDrawer />
        <Avatar />
      </div>
    </header>
  );
}

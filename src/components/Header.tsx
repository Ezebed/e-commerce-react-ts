import { Link } from "react-router-dom";
import { Input, InputGroup, InputLeftElement, Avatar } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

export default function Header(): JSX.Element {
  return (
    <header>
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
            color="text.200"
            variant="filled"
            placeholder="Search"
          />
        </InputGroup>
      </div>
      <div className="headerRight">
        <Avatar />
      </div>
    </header>
  );
}

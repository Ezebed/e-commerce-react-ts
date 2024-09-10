import { Link } from "react-router-dom";
import ShopCartDrawer from "@/components/ShopCart/ShopCartDrawer";
import SearchInput from "./SearchInput";

export default function Header(): JSX.Element {
  return (
    <header className="appHeader">
      <div className="headerLeft">
        <Link to="/" className="siteLogo">
          EzeStore
        </Link>
      </div>
      <div className="headerCenter">
        <SearchInput />
      </div>
      <div className="headerRight">
        <ShopCartDrawer />
      </div>
    </header>
  );
}

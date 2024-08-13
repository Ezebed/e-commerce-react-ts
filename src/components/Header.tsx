import { Link } from "react-router-dom";

export default function Header(): JSX.Element {
  return (
    <header>
      <div className="headerLeft">
        <Link to="/" className="siteLogo ">
          EzeStore
        </Link>
      </div>
      <div className="headerCenter">
        <div className="search"></div>
      </div>
      <div className="headerRight">
        <div className="userLogo"></div>
      </div>
    </header>
  );
}

import "@/assets/css/main.css";
import { ReactNode } from "react";
import { Link } from "react-router-dom";

type mainLayout = {
  children: ReactNode;
};

export default function MainLayout({ children }: mainLayout): JSX.Element {
  return (
    <>
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
      <div className="mainLayout">
        <main>{children}</main>
        <aside>hola</aside>
      </div>
    </>
  );
}

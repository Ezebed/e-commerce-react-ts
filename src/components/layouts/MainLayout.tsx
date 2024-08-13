import "@/assets/css/main.css";
import { ReactNode } from "react";
import Header from "@/components/Header";
import Aside from "@/components/Aside";

type mainLayout = {
  children: ReactNode;
};

export default function MainLayout({ children }: mainLayout): JSX.Element {
  return (
    <>
      <Header />
      <div className="mainLayout">
        <main>{children}</main>
        <aside>
          <Aside />
        </aside>
      </div>
    </>
  );
}

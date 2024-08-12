import "@/assets/css/principal.css";
import { ReactNode } from "react";

type mainLayout = {
  children: ReactNode;
};

export default function MainLayout({ children }: mainLayout): JSX.Element {
  return (
    <>
      <div className="mainLayout">
        <aside className="aside"></aside>
        <main className="principal">{children}</main>
      </div>
    </>
  );
}

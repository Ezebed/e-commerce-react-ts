import MainLayout from "@/components/layouts/MainLayout";
import { Link } from "react-router-dom";

export default function prueba(): JSX.Element {
  return (
    <MainLayout>
      <Link to="/">dashboard</Link>
      <p>hola mundo</p>
    </MainLayout>
  );
}

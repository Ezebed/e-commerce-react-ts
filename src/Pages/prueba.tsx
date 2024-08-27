import ProductaCardList from "@/components/Product/ProductCarList";
import { useProducts } from "@/Hooks/useProducts";
import Header from "@/components/Header";
import Aside from "@/components/Aside";
import { Box, Heading } from "@chakra-ui/react";

export default function prueba(): JSX.Element {
  const { products, productsLoading, productsError, changeProductTitle } =
    useProducts();
  return (
    <>
      <Header changeProductTitle={changeProductTitle} />

      <Box className="mainLayout">
        <main>
          {productsError && (
            <Heading as="h2" fontSize="xl" margin="0 auto">
              A Ocurrido un Error
            </Heading>
          )}
          {productsLoading && (
            <Heading as="h2" fontSize="xl" margin="0 auto">
              Cargando Productos....
            </Heading>
          )}
          {!productsLoading && !productsError && (
            <ProductaCardList products={products!} />
          )}
        </main>

        <Aside />
      </Box>
    </>
  );
}

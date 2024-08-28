import ProductaCardList from "@/components/Product/ProductCarList";
import { useProducts } from "@/Hooks/useProducts";
import Header from "@/components/Header";
import Aside from "@/components/Aside";
import { Box, Heading } from "@chakra-ui/react";

export default function prueba(): JSX.Element {
  const { products, productsLoading, productsError } = useProducts();
  return (
    <>
      <Header />

      <Box className="mainLayout">
        <main>
          {products && products.length > 0 && (
            <ProductaCardList products={products!} />
          )}
          {products && products.length === 0 && (
            <Heading as="h2" fontSize="xl" margin="0 auto">
              No Produtcs To Show
            </Heading>
          )}
          {productsError && (
            <Heading as="h2" fontSize="xl" margin="0 auto">
              An Error Occurred
            </Heading>
          )}
          {productsLoading && (
            <Heading as="h2" fontSize="xl" margin="0 auto">
              Loading Products....
            </Heading>
          )}
        </main>

        <Aside />
      </Box>
    </>
  );
}

import ProductaCardList from "@/components/Product/ProductCarList";
import { useProducts } from "@/Hooks/useProducts";
import Header from "@/components/Header";
import Aside from "@/components/Aside";
import { Box, Flex, Heading, Spinner } from "@chakra-ui/react";

export default function prueba(): JSX.Element {
  const { products, productsLoading, productsError } = useProducts();
  return (
    <>
      <Header />

      <Box className="mainLayout">
        <Aside />
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
            <Flex gap="8px" alignItems="center" margin="0 auto">
              <Spinner color="green.500" />
              <Heading as="h2" fontSize="xl">
                Loading Products....
              </Heading>
            </Flex>
          )}
        </main>
      </Box>
    </>
  );
}

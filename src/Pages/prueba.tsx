import ProductaCardList from "@/components/Product/ProductCarList";
import { useProducts } from "@/Hooks/useProducts";
import Header from "@/components/Header/Header";
import Aside from "@/components/Aside";
import { Box, Button, Center, Heading, Spinner } from "@chakra-ui/react";

export default function prueba(): JSX.Element {
  const {
    products,
    productsLoading,
    productsError,
    getMore,
    hasMore,
    moreProductsLoading,
    moreProductsError,
  } = useProducts();

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
          {(productsError || moreProductsError) && (
            <Heading as="h2" fontSize="xl" margin="0 auto">
              An Error Occurred
            </Heading>
          )}
          {productsLoading && (
            <Center gap="8px" padding="10px">
              <Spinner color="green.500" />
              <Heading as="h2" fontSize="xl">
                Loading Products....
              </Heading>
            </Center>
          )}
          {hasMore && (
            <Center padding="10px">
              <Button
                colorScheme="green"
                size={{ base: "lg", md: "md" }}
                isLoading={moreProductsLoading}
                loadingText="Loading More Products...."
                onClick={() => getMore()}
              >
                Load More Products
              </Button>
            </Center>
          )}
        </main>
      </Box>
    </>
  );
}

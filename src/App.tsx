import { startTransition } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  Icon,
  SimpleGrid,
  Text,
  Tooltip,
  VStack,
} from "@chakra-ui/react";
import BackgroundBlob from "./Icons/BackgroundBlob";
import { SkillIconsReactDark } from "./Icons/ReactDark";
import { SkillIconsTypescript } from "./Icons/SkillIconTypescript";
import { DeviconChakraui } from "./Icons/DeviconChakraUi";

function App() {
  const navigate = useNavigate();

  const navigateToProducts = () => {
    startTransition(() => {
      navigate("/products");
    });
  };

  return (
    <>
      <BackgroundBlob filter="blur(70px)" className="bgBlob" />
      <SimpleGrid columns={2} spacing="16px" padding="16px">
        <VStack gap="12px" alignItems="left">
          <Heading as="h1" fontWeight="bold">
            e-commerce Shop Cart
          </Heading>
          <Text fontSize="xl" width="70%">
            e-commerce falso para el desarrollo de un pseudo carritos de
            compras.
          </Text>

          <HStack>
            <Text fontSize="xl">Tecnologias utilizadas:</Text>

            <Icon boxSize={8} as={SkillIconsReactDark} />

            <Icon boxSize={8} as={SkillIconsTypescript} />

            <Icon boxSize={8} as={DeviconChakraui} />
          </HStack>

          <Button width="fit-content" onClick={navigateToProducts}>
            Pagina
          </Button>
        </VStack>
      </SimpleGrid>
    </>
  );
}

export default App;

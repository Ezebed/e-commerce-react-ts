import { startTransition } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Divider,
  Grid,
  GridItem,
  HStack,
  Heading,
  Hide,
  Icon,
  Image,
  Link,
  Show,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Tooltip } from "react-tooltip";
import BackgroundBlob from "./Icons/BackgroundBlob";
import { SkillIconsReactDark } from "./Icons/ReactDark";
import { SkillIconsTypescript } from "./Icons/SkillIconTypescript";
import { DeviconChakraui } from "./Icons/DeviconChakraUi";
import imgPlaceholder from "@/assets/img/img_placeholder.webp";
import imgDesktop from "@/assets/img/desktop-min.png";
import imgSmartphone from "@/assets/img/smartphone-min.png";

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
      <Grid
        templateColumns={{ base: "1fr", md: "repeat(2,1fr)" }}
        gap={{ base: "36px", md: "16px" }}
        padding="16px"
        minHeight="100vh"
        alignContent="center"
        justifyItems="center"
      >
        <GridItem
          colSpan={{ base: 1, md: 2 }}
          width={{ base: "100%", md: "fit-content" }}
        >
          <HStack
            backgroundColor="dark.100"
            justify={{ base: "space-between", md: "unset" }}
            padding="1rem 2rem"
            borderRadius="10px"
            divider={<Divider orientation="vertical" borderColor="red.500" />}
          >
            <Link href="https://ezebed.netlify.app/" isExternal>
              Portafolio
            </Link>
            <Link
              href="https://github.com/Ezebed/e-commerce-react-ts"
              isExternal
            >
              GitHub
            </Link>
            <Link onClick={navigateToProducts}>EzeStore</Link>
          </HStack>
        </GridItem>
        <VStack
          gap="12px"
          alignItems="left"
          justifyContent="center"
          marginLeft={{ base: "unset", md: "5rem" }}
        >
          <Heading as="h1" fontWeight="bold">
            e-commerce Shop Cart
          </Heading>
          <Text fontSize="xl" width="70%">
            e-commerce falso para el desarrollo de un pseudo carritos de
            compras.
          </Text>

          <HStack>
            <Text fontSize="xl">Tecnologias utilizadas:</Text>

            <Icon
              data-tooltip-id="react-tooltip"
              boxSize={8}
              as={SkillIconsReactDark}
            />
            <Tooltip id="react-tooltip" place="bottom" content="ReactJS" />
            <Icon
              data-tooltip-id="typescript-tooltip"
              boxSize={8}
              as={SkillIconsTypescript}
            />
            <Tooltip
              id="typescript-tooltip"
              place="bottom"
              content="TypeScript"
            />
            <Icon
              data-tooltip-id="chakra-tooltip"
              boxSize={8}
              as={DeviconChakraui}
            />
            <Tooltip id="chakra-tooltip" place="bottom" content="Chakra UI" />
          </HStack>

          <Button width="fit-content" onClick={navigateToProducts}>
            EzeStore
          </Button>
        </VStack>
        <Show above="md">
          <Image src={imgDesktop} fallbackSrc={imgPlaceholder} />
        </Show>
        <Hide above="md">
          <Image src={imgSmartphone} fallbackSrc={imgPlaceholder} />
        </Hide>
      </Grid>
    </>
  );
}

export default App;

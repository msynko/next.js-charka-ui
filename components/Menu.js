import { Container, Flex, Image, Box, useColorMode } from "@chakra-ui/react"
import MenuBar from "./MenuBar"

export default function Menu() {
  const { colorMode } = useColorMode()

  return (
    <Container py={{ base: 10 }} minW="100%">
      <Flex alignItems="center" justifyContent="space-between">
        <Box w={{ base: "40%", sm: "25%" }}>
          <Image
            src={
              colorMode === "light"
                ? "../images/logo-dark.svg"
                : "../images/logo-white.svg"
            }
            alt="logo"
          />
        </Box>
        <MenuBar />
      </Flex>
    </Container>
  )
}

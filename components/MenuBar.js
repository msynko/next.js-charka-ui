import {
  Image,
  Button,
  useColorMode,
  MenuList,
  MenuButton,
  MenuItem,
  Menu,
  Divider,
  Text,
  HStack,
} from "@chakra-ui/react"
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons"

export default function MenuBar() {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Menu>
      {({ isOpen }) => (
        <>
          <MenuButton
            isActive={isOpen}
            as={Button}
            p={2}
            bg={colorMode === "dark" ? "black" : "rgba(126, 132, 137, 0.1)"}
            _hover={{ bg: "rgba(122, 118, 255, 0.2)" }}
            _focus={{ bg: "rgba(122, 118, 255, 0.2)" }}
            _active={{ bg: "rgba(122, 118, 255, 0.2)" }}
            rightIcon={
              isOpen ? (
                <>
                  <Divider orientation="vertical" color="grey" height="35px" />
                  <ChevronUpIcon m="auto" color="grey" />
                </>
              ) : (
                <>
                  <Divider orientation="vertical" color="grey" height="35px" />
                  <ChevronDownIcon m="auto" color="grey" />
                </>
              )
            }>
            {colorMode === "light" ? (
              <HStack>
                <Image
                  w={{ base: "15px" }}
                  src="../icons/light_mode.svg"
                  alt="sun icon"
                />
                <Text color="grey" fontSize={{ base: "sm" }}>
                  Light
                </Text>
              </HStack>
            ) : (
              <HStack>
                <Image
                  w={{ base: "15px" }}
                  src="../icons/dark_mode.svg"
                  alt="moon icon"
                />
                <Text color="grey" fontSize={{ base: "sm" }}>
                  Dark
                </Text>
              </HStack>
            )}
          </MenuButton>
          <MenuList minW="89.02px" bg={colorMode === "dark" && "black"}>
            <MenuItem onClick={colorMode === "light" ? null : toggleColorMode}>
              <HStack>
                <Image
                  w={{ base: "15px" }}
                  src="../icons/light_mode.svg"
                  alt="sun icon"
                />
                <Text
                  color={colorMode === "dark" && "grey"}
                  fontSize={{ base: "sm" }}>
                  Light
                </Text>
              </HStack>
            </MenuItem>
            <MenuItem onClick={colorMode === "dark" ? null : toggleColorMode}>
              <HStack>
                <Image
                  w={{ base: "15px" }}
                  src="../icons/dark_mode.svg"
                  alt="moon icon"
                />
                <Text
                  color={colorMode === "dark" && "grey"}
                  fontSize={{ base: "sm" }}>
                  Dark
                </Text>
              </HStack>
            </MenuItem>
            <MenuItem>
              <HStack>
                <Image
                  w={{ base: "15px" }}
                  src="../icons/settings.svg"
                  alt="settings icon"
                />
                <Text
                  fontSize={{ base: "sm" }}
                  color={colorMode === "dark" && "grey"}>
                  {" "}
                  System
                </Text>
              </HStack>
            </MenuItem>
          </MenuList>
        </>
      )}
    </Menu>
  )
}

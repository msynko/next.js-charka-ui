import {
  Container,
  Heading,
  Text,
  List,
  ListItem,
  ListIcon,
  Flex,
} from "@chakra-ui/react"
import { VscCircleFilled } from "react-icons/vsc"
import { headerData, listData } from "../utils/data"

export default function Header() {
  return (
    <Container maxW="100%" p={{ base: 0, sm: "24px" }}>
      <Heading
        fontSize={{ base: "3xl", sm: "4xl", md: "6xl", xl: "8xl" }}
        lineHeight={{ base: "small" }}>
        {headerData.header}
      </Heading>
      <Heading
        fontSize={{ base: "md", sm: "xl", md: "2xl", xl: "4xl" }}
        lineHeight={{ base: "none" }}>
        {headerData.subHeaderOne}
      </Heading>
      <Heading
        fontSize={{ base: "md", sm: "xl", md: "2xl", xl: "4xl" }}
        lineHeight={{ base: "none" }}>
        {headerData.subHeaderTwo}
      </Heading>
      <List spacing={6} color="#7E8489" py={{ base: "15px" }}>
        {listData.list.map((list, idx) => (
          <Flex key={idx} alignItems="flex-start" m={0}>
            <ListIcon as={VscCircleFilled} color="#7A76FF" mt="5px" />
            <ListItem
              fontSize={{ base: "sm", sm: "md", xl: "xl" }}
              lineHeight={{ base: "shorter" }}>
              <Text>{list.content}</Text>
            </ListItem>
          </Flex>
        ))}
      </List>
    </Container>
  )
}

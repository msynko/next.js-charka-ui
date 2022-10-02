import {
  Container,
  FormControl,
  FormLabel,
  Input,
  RadioGroup,
  Radio,
  HStack,
  Textarea,
  Button,
  Text,
  useColorModeValue,
  Grid,
  GridItem,
  Heading,
  useColorMode,
} from "@chakra-ui/react"
import { formData } from "../utils/data"

export default function Form() {
  const { colorMode } = useColorMode()
  const bgColor = useColorModeValue("#FFFFFF", "#0C0C0C")
  const borderColor = useColorModeValue(
    "0.5px solid #ECECEC",
    "1px solid #282D33",
  )
  const borderShadow = useColorModeValue(
    "4px 8px 18px rgba(217, 217, 217, 0.25);",
    "none",
  )
  return (
    <Container
      minW="100%"
      minH="100%"
      border={borderColor}
      boxShadow={borderShadow}
      borderRadius="23px"
      backgroundColor={bgColor}
      position="relative"
      w={{ base: "90%", sm: "100%" }}
      p={{ base: 5, sm: 8, md: 10 }}>
      <FormControl py={{ base: 1, sm: 5, md: 8 }}>
        <RadioGroup defaultValue="professional">
          <HStack spacing={{ base: 0, sm: "10px" }}>
            {formData.radio.map((el, idx) => (
              <Radio
                key={idx}
                value={el.value}
                borderWidth="3px"
                borderColor={colorMode === "light" ? "lightGrey" : "lightBlack"}
                bg={colorMode === "light" ? "lightGrey" : "lightBlack"}
                px={{ base: 0 }}
                py={3}
                _checked={{
                  bg: "purple",
                }}>
                <Heading fontSize={{ base: "md", lg: "lg", xl: "2xl" }}>
                  {el.value}
                </Heading>
              </Radio>
            ))}
          </HStack>
        </RadioGroup>
        <Grid
          templateColumns="repeat(2, 1fr)"
          templateRows="repeat(6, auto)"
          color="grey"
          gap={{ base: 5, lg: 10 }}
          lineHeight="19px"
          sx={{
            span: {
              color: "grey",
            },
          }}>
          {formData.input.map((el, idx) => (
            <GridItem
              key={idx}
              colSpan={
                el.type === "textArea" ? { base: 2 } : { base: 2, sm: 1 }
              }>
              <FormControl isRequired py={{ base: 0, xl: 5 }}>
                <FormLabel fontSize={{ sm: "sm", lg: "lg", xlg: "xl" }}>
                  {el.label}
                </FormLabel>
                {el.type === "textArea" ? <Textarea /> : <Input />}
              </FormControl>
            </GridItem>
          ))}
        </Grid>
      </FormControl>

      <HStack py={{ base: 3 }}>
        <Button
          fontFamily="inter"
          fontSize={{ base: "10px" }}
          lineHeight="tiny"
          letterSpacing="widest"
          type="submit"
          bg="purple"
          color="#FFFFFF"
          size={{ base: "sm", sm: "md", lg: "lg" }}
          textTransform="uppercase">
          Send
        </Button>
        <Text color={colorMode === "dark" ? "gray.600" : "grey"}>
          <sup>*</sup>required
        </Text>
      </HStack>
    </Container>
  )
}

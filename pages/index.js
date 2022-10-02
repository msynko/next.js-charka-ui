import { Grid, GridItem } from "@chakra-ui/react"
import Menu from "../components/Menu"
import Header from "../components/Header"
import Form from "../components/Form"
import Hero from "../components/Hero"
import Footer from "../components/Footer"

export default function Home() {
  return (
    <Grid
      templateColumns="repeat(12, 1fr)"
      templateRows="repeat(12, auto)"
      py="3%"
      w="100%">
      <GridItem gridArea="2/2/3/12" w="100%">
        <Menu />
      </GridItem>
      <GridItem gridArea={{ base: "3/2/5/12", sm: "3/2/7/7" }} w="100%">
        <Header />
      </GridItem>

      <GridItem gridArea={{ base: "5/2/9/12", sm: "3/7/9/12" }} w="100%">
        <Form />
      </GridItem>
      <GridItem gridArea={{ base: "9/1/11/13", sm: "7/2/11/8" }} w="100%">
        <Hero />
      </GridItem>
      <GridItem gridArea={{ base: "11/2/12/12", sm: "9/8/11/12" }} w="100%">
        <Footer />
      </GridItem>
    </Grid>
  )
}

import { Grid, GridItem, Image } from "@chakra-ui/react"
import { footerData } from "../utils/data"

export default function Footer() {
  return (
    <Grid
      templateColumns="repeat(3, 1fr)"
      templateRows="repeat(2, auto)"
      p={{ base: 5, sm: 3, md: 10, xl: 20 }}
      gap={{ base: 10, sm: 5, md: 10, xl: 20 }}>
      {footerData.footer.map((el, idx) => (
        <GridItem m="auto" key={idx}>
          <Image src={el.url} alt={el.name} />
        </GridItem>
      ))}
    </Grid>
  )
}

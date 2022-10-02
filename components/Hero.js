import { Box, Image } from "@chakra-ui/react"

export default function Hero() {
  return (
    <Box px={{ base: "5%", sm: 0 }} mt={{ base: "-20px", sm: 0 }}>
      <Image
        zIndex="-9999"
        src="../images/calendar.png"
        alt="calendar"
        height="100%"
        maxH="100%"
        width="100%"
        objectFit="contain"
      />
    </Box>
  )
}

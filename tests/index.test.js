import Home from "../pages/index"
import "@testing-library/jest-dom"
import { render } from "@testing-library/react"

describe("Index Page", () => {
  it("should render", () => {
    render(<Home />)
  })
})

import { memo } from "react";
import { Container } from "../../src/styled-components"
import Page1 from "./1";


function Start() {

    


  return (
    <Container className="flex justify-center items-center h-screen relative">
        <Page1 />
    </Container>
  )
}

export default memo(Start);